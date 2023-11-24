/* eslint-disable react/prop-types */
import ExerciseCard from "./ExerciseCard";

const Results = ({ activities }) => {

  return (
    <>
      {
        activities.slice(0, 40).map((activity, index) => {
          return (
            <ExerciseCard key={index} activity={activity} />
          )
        })
      }
    </>
  )
}

export default Results;
