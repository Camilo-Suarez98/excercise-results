/* eslint-disable react/prop-types */
import { useState } from "react";
import ExerciseCard from "./ExerciseCard";
import Button from "./Button";

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
        <Button onClick={showMoreInfo} bgColor="bg-green-500" text="Ver más" />
        <Button onClick={showLessInfo} bgColor="bg-red-500" text="Ver menos" />
      </div>
    </>
  )
}

export default Results;
