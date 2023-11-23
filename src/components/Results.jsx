/* eslint-disable react/prop-types */
const Results = ({ activity }) => {
  const time = new Date(activity.StartTimeInSeconds * 1000)
  const day = time.getDate();
  const month = time.getMonth() + 1;
  const year = time.getFullYear();
  const minute = time.getMinutes();
  const hour = time.getHours();
  return (
    <div className='border-2 border-blue-500'>
      <p>Fecha: {day}/{month}/{year} {hour}:{minute}</p>
      <p>
        Duración:
        {' '}
        {(activity.DurationInSeconds / 3600).toFixed(2)}
        {' '}
        Horas
      </p>
      <p>Distancia: {activity.DistanceInMeters} metros</p>
      <p>Ritmo promedio: {activity.AveragePaceInMinutesPerKilometer.toFixed(2)} km/m</p>
      <p>Pasos: {activity.Steps}</p>
      <p>Promedio de velocidad: {activity.DistanceInMeters} m/s</p>
      <p>Ascenso total: {activity.TotalElevationGainInMeters} m</p>
      <p>Ritmo cardíaco: {activity.AverageHeartRateInBeatsPerMinute} p/m</p>
    </div>
  )
}

export default Results;
