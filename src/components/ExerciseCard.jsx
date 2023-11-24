/* eslint-disable react/prop-types */
import useValidateActivity from "../hooks/useValidateActivity"

const ExerciseCard = ({ activity }) => {
  const validActivity = useValidateActivity(activity);
  const time = new Date(activity.StartTimeInSeconds * 1000)
  const day = time.getDate();
  const month = time.getMonth() + 1;
  const year = time.getFullYear();
  const minute = time.getMinutes();
  const hour = time.getHours();

  return (
    <div className={`p-3 ${validActivity ? 'bg-green-500' : 'bg-red-500'}`}>
      <p>Fecha: {day}/{month}/{year} {hour}:{minute}</p>
      <p>
        Duración: {(activity.DurationInSeconds / 60).toFixed(2)} Minutos
      </p>
      <p>Distancia: {(activity.DistanceInMeters / 1000).toFixed(2)} km</p>
      <p>Ritmo promedio: {activity.AveragePaceInMinutesPerKilometer.toFixed(2)} m/km</p>
      <p>Pasos: {activity.Steps}</p>
      <p>Promedio de velocidad: {activity.AverageSpeedInMetersPerSecond} m/s</p>
      <p>Ascenso total: {activity.TotalElevationGainInMeters} m</p>
      <p>Ritmo cardíaco: {activity.AverageHeartRateInBeatsPerMinute} ppm</p>
    </div>
  )
}

export default ExerciseCard