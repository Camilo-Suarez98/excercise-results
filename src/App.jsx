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
      <div>
        {activities.length === 0 ?
          <p>Cargue su archivo de excel para continuar</p> :
          activities.slice(0, 30).map((activity, index) => {
            const time = new Date(activity.StartTimeInSeconds * 1000)
            const day = time.getDate()
            const month = time.getMonth() + 1
            const year = time.getFullYear()
            const minute = time.getMinutes()
            const hour = time.getHours()
            return (
              <div key={index} className='border-2 border-blue-500'>
                <p>Fecha: {day}/{month}/{year} {hour}:{minute}</p>
                <p>Duración: {(activity.DurationInSeconds / 3600).toFixed(2)} horas</p>
                <p>Distancia: {activity.DistanceInMeters} metros</p>
                <p>Ritmo promedio: {activity.AveragePaceInMinutesPerKilometer.toFixed(2)} km/m</p>
                <p>Pasos: {activity.Steps}</p>
                <p>Pomedio de velocidad: {activity.DistanceInMeters} m/s</p>
                <p>Ascenso total: {activity.TotalElevationGainInMeters} m</p>
                <p>Ritmo cardíaco: {activity.AverageHeartRateInBeatsPerMinute} p/m</p>
              </div>
            )
          })
        }
      </div>
      <input type="file" onChange={handleUploadFile} />
    </div>
  )
}

export default App;
