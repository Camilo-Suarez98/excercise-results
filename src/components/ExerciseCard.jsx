/* eslint-disable react/prop-types */
import useValidateActivity from "../hooks/useValidateActivity"

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
      <p>Duración: {DurationInSeconds} s</p>
      <p>Distancia: {DistanceInMeters} m</p>
      <p>Ritmo promedio: {AveragePaceInMinutesPerKilometer} m/km</p>
      <p>Pasos: {Steps}</p>
      <p>Promedio de velocidad: {AverageSpeedInMetersPerSecond} m/s</p>
      <p>Ascenso total: {TotalElevationGainInMeters} m</p>
      <p>Ritmo cardíaco: {AverageHeartRateInBeatsPerMinute} ppm</p>
    </div>
  )
};

export default ExerciseCard;
