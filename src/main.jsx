import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ActivitiesProvider } from './context/UploadFileContext.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <ActivitiesProvider>
        <App />
      </ActivitiesProvider>
    </ThemeProvider>
  </React.StrictMode>
)
