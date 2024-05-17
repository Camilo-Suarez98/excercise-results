import { useState } from "react";

import ExerciseCard from "./ExerciseCard";

const FormExercise = () => {
  const [activity, setActivity] = useState({
    DurationInSeconds: 0,
    DistanceInMeters: 0,
    Steps: 0,
    AverageSpeedInMetersPerSecond: 0,
    AveragePaceInMinutesPerKilometer: 0,
    TotalElevationGainInMeters: 0,
    AverageHeartRateInBeatsPerMinute: 0
  });
  const [exercises, setExercises] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setActivity({
      ...activity,
      [name]: value
    });
  };

  const handleSendForm = (e) => {
    e.preventDefault();

    setExercises((prevExercise) => [...prevExercise, activity]);
    setActivity({
      DurationInSeconds: 0,
      DistanceInMeters: 0,
      Steps: 0,
      AverageSpeedInMetersPerSecond: 0,
      AveragePaceInMinutesPerKilometer: 0,
      TotalElevationGainInMeters: 0,
      AverageHeartRateInBeatsPerMinute: 0
    });
  };

  return (
    <div>
      <form className="flex flex-col" onSubmit={handleSendForm}>
        <h2 className="text-3xl my-3">Enter the data</h2>
        <label htmlFor="duration">Duration (min)</label>
        <input id="duration" name="DurationInSeconds" type="text" onChange={handleInputChange} />
        <label htmlFor="distance">Distance (m)</label>
        <input id="distance" name="DistanceInMeters" type="text" onChange={handleInputChange} />
        <label htmlFor="steps">Step</label>
        <input id="steps" name="Steps" type="text" onChange={handleInputChange} />
        <label htmlFor="speed">Average Speed (m/s)</label>
        <input id="speed" name="AverageSpeedInMetersPerSecond" type="text" onChange={handleInputChange} />
        <label htmlFor="pace">Average Pace (m/km)</label>
        <input id="pace" name="AveragePaceInMinutesPerKilometer" type="text" onChange={handleInputChange} />
        <label htmlFor="elevation">Total Elevation (m)</label>
        <input id="elevation" name="TotalElevationGainInMeters" type="text" onChange={handleInputChange} />
        <label htmlFor="heart">Heart Rate (ppm)</label>
        <input id="heart" name="AverageHeartRateInBeatsPerMinute" type="text" onChange={handleInputChange} />
        <button className="mt-5 transition duration-1000 hover:bg-green-500">Check</button>
      </form>
      <div className="grid gap-5 mt-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {
          exercises.map((exercise, index) => {
            return (
              <ExerciseCard key={index} activity={exercise} />
            )
          })
        }
      </div>
    </div>
  );
};

export default FormExercise;
