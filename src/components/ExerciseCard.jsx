import useValidateActivity from "../hooks/useValidateActivity";

const ExerciseCard = ({ activity }) => {
  const validActivity = useValidateActivity(activity);

  const {
    DurationInSeconds,
    DistanceInMeters,
    AveragePaceInMinutesPerKilometer,
    Steps,
    AverageSpeedInMetersPerSecond,
    TotalElevationGainInMeters,
    AverageHeartRateInBeatsPerMinute
  } = activity;

  return (
    <div className={`p-3 ${!validActivity ? 'bg-green-500' : 'bg-red-500'}`}>
      <p>Duration: {DurationInSeconds / 60} min</p>
      <p>Distance: {DistanceInMeters} m</p>
      <p>Average Pace: {AveragePaceInMinutesPerKilometer} m/km</p>
      <p>Steps: {Steps}</p>
      <p>Average Speed: {AverageSpeedInMetersPerSecond} m/s</p>
      <p>Total Elevation: {TotalElevationGainInMeters} m</p>
      <p>Average Heart Rate: {AverageHeartRateInBeatsPerMinute} ppm</p>
    </div>
  );
};

export default ExerciseCard;
