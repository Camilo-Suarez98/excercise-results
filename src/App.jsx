import { useState } from 'react';
import * as ExcelJS from 'exceljs';
import './App.css'
import Results from './components/Results';
import Loader from './components/Loader'

function App() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(false);

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

  if (loading) {
    return <Loader />
  }

  console.log(activities);

  return (
    <div>
      <h2 className='text-4xl my-5'>VerifyFit</h2>
      <div className='flex gap-3 flex-wrap justify-center'>
        {activities.length === 0 ?
          <p>Cargue su archivo de excel para continuar</p> :
          <Results activities={activities} />
        }
      </div>
      <div className='mt-6'>
        <input type="file" onChange={handleUploadFile} />
      </div>
    </div>
  )
}

export default App;
