import { useState } from "react";

import ExerciseCard from "./ExerciseCard";
import InputForm from "./InputForm";

const FormExercise = () => {
  const [activity, setActivity] = useState({
    DurationInSeconds: '',
    DistanceInMeters: '',
    Steps: '',
    AverageSpeedInMetersPerSecond: '',
    AveragePaceInMinutesPerKilometer: '',
    TotalElevationGainInMeters: '',
    AverageHeartRateInBeatsPerMinute: ''
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
      DurationInSeconds: '',
      DistanceInMeters: '',
      Steps: '',
      AverageSpeedInMetersPerSecond: '',
      AveragePaceInMinutesPerKilometer: '',
      TotalElevationGainInMeters: '',
      AverageHeartRateInBeatsPerMinute: ''
    });
  };

  return (
    <div>
      <form className="flex flex-col" onSubmit={handleSendForm}>
        <h2 className="text-3xl my-3">Enter the data</h2>
        <InputForm id="duration" label="Duration (s)" name="DurationInSeconds" value={activity.DurationInSeconds} handleChange={handleInputChange} />
        <InputForm id="distance" label="Distance (m)" name="DistanceInMeters" value={activity.DistanceInMeters} handleChange={handleInputChange} />
        <InputForm id="steps" label="Step" name="Steps" value={activity.Steps} handleChange={handleInputChange} />
        <InputForm id="speed" label="Average Speed (m/s)" name="AverageSpeedInMetersPerSecond" value={activity.AverageSpeedInMetersPerSecond} handleChange={handleInputChange} />
        <InputForm id="pace" label="Average Pace (m/km)" name="AveragePaceInMinutesPerKilometer" value={activity.AveragePaceInMinutesPerKilometer} handleChange={handleInputChange} />
        <InputForm id="elevation" label="Total Elevation (m)" name="TotalElevationGainInMeters" value={activity.TotalElevationGainInMeters} handleChange={handleInputChange} />
        <InputForm id="heart" label="Heart Rate (ppm)" name="AverageHeartRateInBeatsPerMinute" value={activity.AverageHeartRateInBeatsPerMinute} handleChange={handleInputChange} />
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
