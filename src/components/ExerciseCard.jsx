/* eslint-disable react/prop-types */
import useValidateActivity from "../hooks/useValidateActivity"

const ExerciseCard = ({ activity }) => {
  const validActivity = useValidateActivity(activity);

  return (
    <div className={`p-3 ${!validActivity ? 'bg-green-500' : 'bg-yellow-500'}`}>
      <p>Duración: {activity.DurationInSeconds} s</p>
      <p>Distancia: {activity.DistanceInMeters} m</p>
      <p>Ritmo promedio: {activity.AveragePaceInMinutesPerKilometer} m/km</p>
      <p>Pasos: {activity.Steps}</p>
      <p>Promedio de velocidad: {activity.AverageSpeedInMetersPerSecond} m/s</p>
      <p>Ascenso total: {activity.TotalElevationGainInMeters} m</p>
      <p>Ritmo cardíaco: {activity.AverageHeartRateInBeatsPerMinute} ppm</p>
    </div>
  )
};

export default ExerciseCard;
