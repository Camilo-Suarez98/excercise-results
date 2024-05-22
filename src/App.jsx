import { useContext } from 'react';

import './App.css';
import Results from './components/Results';
import Loader from './components/Loader';
import FormExercise from './components/FormExercise';
import Conditions from './components/Conditions';
import UploadFile from './components/UploadFile';
import ManuallyData from './components/ManuallyData';
import { ActivitiesContext } from './context/UploadFileContext';

function App() {
  const { activities, form, loading, handleUploadFile, handleShowForm } = useContext(ActivitiesContext);

  if (loading) return <Loader />;

  return (
    <div>
      <h2 className='text-5xl my-5 text-green-500 font-black p-2 lg:text-7xl'>
        Verify <span className='text-red-500'>Fit</span> 🏃
      </h2>
      <p className='pb-5 text-green-300 text-lg'>App to check whether your walking results are real or fake</p>
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
      <p className='text-2xl pt-5'>You can use this file as an example</p>
      <a className='flex justify-center items-center text-center text-2xl text-red-500' href="/exercise-result.xlsx" download="exercise-result.xlsx">
        <svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.50005 1.04999C7.74858 1.04999 7.95005 1.25146 7.95005 1.49999V8.41359L10.1819 6.18179C10.3576 6.00605 10.6425 6.00605 10.8182 6.18179C10.994 6.35753 10.994 6.64245 10.8182 6.81819L7.81825 9.81819C7.64251 9.99392 7.35759 9.99392 7.18185 9.81819L4.18185 6.81819C4.00611 6.64245 4.00611 6.35753 4.18185 6.18179C4.35759 6.00605 4.64251 6.00605 4.81825 6.18179L7.05005 8.41359V1.49999C7.05005 1.25146 7.25152 1.04999 7.50005 1.04999ZM2.5 10C2.77614 10 3 10.2239 3 10.5V12C3 12.5539 3.44565 13 3.99635 13H11.0012C11.5529 13 12 12.5528 12 12V10.5C12 10.2239 12.2239 10 12.5 10C12.7761 10 13 10.2239 13 10.5V12C13 13.1041 12.1062 14 11.0012 14H3.99635C2.89019 14 2 13.103 2 12V10.5C2 10.2239 2.22386 10 2.5 10Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
        Download File
      </a>
    </div>
  )
}

export default App;
