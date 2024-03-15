import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ActivitiesProvider } from './Context/UploadFileContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ActivitiesProvider>
      <App />
    </ActivitiesProvider>
  </React.StrictMode>,
)
