import { useState } from 'react';
import './App.css'

function App() {
  const [activities, setActivities] = useState([])

  const handleUploadFile = async (e) => {
    const file = e.target.files[0];

    if (file) {
      try {
        const text = await file.text();
        const data = parseCSV(text);
        setActivities(data);
      } catch (error) {
        console.log('Error reading the file', error);
      }
    }
  };

  const parseCSV = (csvText) => {
    const lines = csvText.split('\n');
    const headers = lines[0].split(',');
    const data = lines.slice(1).map((line) => {
      const values = line.split(',');
      return headers.reduce((obj, header, index) => {
        obj[header.trim()] = values[index].trim();
        return obj;
      }, {});
    });

    return data;
  };

  console.log(activities);

  return (
    <div>
      <input type="file" onChange={handleUploadFile} />

    </div>
  )
}

export default App;
