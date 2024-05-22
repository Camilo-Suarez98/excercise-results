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
    </div>
  )
}

export default App;
