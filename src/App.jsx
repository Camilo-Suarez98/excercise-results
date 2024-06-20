import { useContext } from 'react';

import './App.css';
import Results from './components/Results';
import Loader from './components/Loader';
import FormExercise from './components/FormExercise';
import Conditions from './components/Conditions';
import UploadFile from './components/UploadFile';
import ManuallyData from './components/ManuallyData';
import DownloadFile from './components/DownloadFile';
import { ActivitiesContext } from './context/UploadFileContext';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const { activities, form, loading, handleUploadFile, handleShowForm } = useContext(ActivitiesContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  if (loading) return <Loader />;

  return (
    <div className={`w-full h-screen flex flex-col justify-center p-0 m-0 transition duration-700 ${theme === "dark" ? "bg-[#393939] text-[#d9d8d8]" : "bg-[#d9d8d8] text-[#393939]"}`}>
      <div className='flex flex-col justify-center items-center md:flex-row'>
        <h2 className='text-5xl my-5 text-green-500 font-black p-2 lg:text-7xl'>
          Verify <span className='text-red-500'>Fit</span> 🏃
        </h2>
        <button
          className={`focus:outline-none ${theme === "dark" ? "bg-[#d9d8d8]" : "bg-[#393939]"}`}
          onClick={toggleTheme}
        >
          {theme === "dark" ? "🌤️" : "🌙"}
        </button>
      </div>
      <p className='pb-5 text-red-400 text-lg'>App to check whether your walking results are real or fake</p>
      <div>
        <Conditions />
        {activities.length === 0 ?
          <>
            {
              !form &&
              <UploadFile onChange={handleUploadFile} />
            }
            <div className='mt-6'>
              <ManuallyData onClick={handleShowForm} />
              {
                form &&
                <FormExercise />
              }
            </div>
          </> :
          <Results activities={activities} />
        }
      </div>

      <DownloadFile />
    </div>
  )
}

export default App;
