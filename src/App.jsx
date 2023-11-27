import { useState } from 'react';
import * as ExcelJS from 'exceljs';
import './App.css'
import Results from './components/Results';
import Loader from './components/Loader'
import FormExercise from './components/FormExercise';

function App() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(false);

  const handleUploadFile = async (e) => {
    const file = e.target.files[0];

    if (file) {
      try {
        setLoading(true)
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.load(file);

        const worksheet = workbook.worksheets[0];
        const data = parseExcel(worksheet)
        setActivities(data);
      } catch (error) {
        console.log('Error reading the file', error);
      } finally {
        setLoading(false)
      }
    }
  };

  const parseExcel = (worksheet) => {
    const data = [];

    worksheet.eachRow((row, rowNumber) => {
      if (rowNumber !== 1) {
        const rowData = {};
        row.eachCell({ includeEmpty: true }, (cell, colNumber) => {
          const header = worksheet.getCell(1, colNumber).value;
          rowData[header] = cell.value;
        });

        data.push(rowData);
      }
    });

    return data;
  };

  const handleShowForm = () => {
    if (!form) setForm(true);
    else setForm(false);
  };

  if (loading) {
    return <Loader />
  }

  return (
    <div>
      <h2 className='text-4xl my-5 text-green-500 font-black'>VerifyFit</h2>
      <div>
        <p>Si el cuadro es color <span className="bg-green-500">verde</span> significa que los datos son reales</p>
        <p className="mt-2 mb-5">Si es de color <span className="bg-yellow-500">amarillo</span> significa que alguno de los datos no parece real</p>
        {activities.length === 0 ?
          <>
            {
              !form &&
              <>
                <p>Cargue su archivo de excel para continuar</p>
                <div className='mt-6'>
                  <input type="file" onChange={handleUploadFile} />
                </div>
              </>
            }
            <div className='mt-6'>
              <p>
                Ó
                {' '}
                <button
                  className='bg-transparent p-0 font-black outline-none text-green-300 transition duration-700 hover:border-none hover:text-green-500'
                  onClick={handleShowForm}
                >
                  click aquí
                </button>
                {' '}
                para ingresar datos manualmente
              </p>
              {
                form &&
                <FormExercise />
              }
            </div>
          </> :
          <Results activities={activities} />
        }
      </div>
    </div>
  )
}

export default App;
