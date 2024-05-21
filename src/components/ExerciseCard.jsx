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

  const formatNumber = (num) => {
    return (
      num !== null
        && num !== undefined
        && typeof num === 'number'
        ? num?.toFixed(2)
        : '0.00'
    )
  };

  return (
    <div className={`p-3 ${!validActivity ? 'bg-green-500' : 'bg-red-500'}`}>
      <p>Duration: {formatNumber(DurationInSeconds) / 60} min</p>
      <p>Distance: {formatNumber(DistanceInMeters)} m</p>
      <p>Average Pace: {formatNumber(AveragePaceInMinutesPerKilometer)} m/km</p>
      <p>Steps: {Steps}</p>
      <p>Average Speed: {formatNumber(AverageSpeedInMetersPerSecond)} m/s</p>
      <p>Total Elevation: {formatNumber(TotalElevationGainInMeters)} m</p>
      <p>Average Heart Rate: {AverageHeartRateInBeatsPerMinute} ppm</p>
    </div>
  );
};

export default ExerciseCard;
