import { createContext, useState } from "react";
import * as ExcelJS from 'exceljs';

export const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);
  const [form, setForm] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleUploadFile = async (e) => {
    const file = e.target.files[0];

    if (file) {
      try {
        setLoading(true);
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.load(file);

        const worksheet = workbook.worksheets[0];
        const data = parseExcel(worksheet);
        setActivities(data);
      } catch (error) {
        console.log('Error reading the file', error);
      } finally {
        setLoading(false);
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
    if (!form) {
      setForm(true);
    } else {
      setForm(false);
    }
  };

  return (
    <ActivitiesContext.Provider value={{ activities, form, loading, handleUploadFile, handleShowForm }}>
      {children}
    </ActivitiesContext.Provider>
  );
};

