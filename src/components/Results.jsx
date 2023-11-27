/* eslint-disable react/prop-types */
import { useState } from "react";
import ExerciseCard from "./ExerciseCard";

const Results = ({ activities }) => {
  const firstData = 30;
  const [numData, setNumData] = useState(firstData);

  const showMoreInfo = () => {
    setNumData(numData + 30);
  }

  const showLessInfo = () => {
    if (numData > firstData) {
      setNumData(numData - 30);
    }
  }

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {
          activities?.slice(0, numData)?.map((activity, index) => {
            return (
              <ExerciseCard key={index} activity={activity} />
            )
          })
        }
      </div>
      <div className="mt-10 flex justify-center gap-5">
        <button onClick={showMoreInfo} className="bg-green-500">Ver más</button>
        <button onClick={showLessInfo} className="bg-red-500">Ver menos</button>
      </div>
    </>
  )
}

export default Results;
