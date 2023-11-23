import { useState } from 'react';
import * as ExcelJS from 'exceljs';
import './App.css'

function App() {
  const [activities, setActivities] = useState([])

  const handleUploadFile = async (e) => {
    const file = e.target.files[0];

    if (file) {
      try {
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.load(file);

        const worksheet = workbook.worksheets[0];
        const data = parseExcel(worksheet)
        setActivities(data);
      } catch (error) {
        console.log('Error reading the file', error);
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

  console.log(activities);

  return (
    <div>
      <h2>Resultados Ejercicio</h2>
      <ul>
        {activities.length === 0 ?
          <p>Cargue su archivo de excel para continuar</p> :
          activities.map((activity, index) => (
            <p key={index} className='border-2 border-blue-500'>
              <li>Time in secons: {activity.StartTimeInSeconds}</li>
            </p>
          ))
        }
      </ul>
      <input type="file" onChange={handleUploadFile} />
    </div>
  )
}

export default App;
