const isSuspiciousSpeed = (activity) => {
  const minSpeed = 2.5;
  const maxSpeed = 3.5;

  const averageSpeed = activity.AverageSpeedInMetersPerSecond;
  console.log('averageSpeed', averageSpeed > minSpeed && averageSpeed < maxSpeed);
  return averageSpeed > minSpeed && averageSpeed < maxSpeed;
};

const isSuspiciousPace = (activity) => {
  const averagePace = activity.AveragePaceInMinutesPerKilometer;
  console.log('paceInMinutes', averagePace);
  console.log('averagePace', averagePace > 4 && averagePace < 6);
  return averagePace > 4 && averagePace < 6;
}

const isSuspiciousDurationAndDistance = (activity) => {
  const calculatedSpeed = activity.DistanceInMeters / activity.DurationInSeconds;
  console.log('calculatedSpeed', calculatedSpeed);
  console.log('isSuspiciousDurationAndDistance', Math.abs(activity.AverageSpeedInMetersPerSecond - calculatedSpeed) > 0.5);
  return Math.abs(activity.AverageSpeedInMetersPerSecond - calculatedSpeed) > 0.5;
};

const isSuspiciousStepsAndDistance = (activity) => {
  const calculatedSteps = activity.AverageSpeedInMetersPerSecond * activity.DurationInSeconds;
  return Math.abs(activity.Steps - calculatedSteps) > 1000;
};

// const isSuspiciousElevation = (activity) => {
//   const elevationRatio = activity.TotalElevationGainInMeters / activity.DistanceInMeters;
//   return elevationRatio < 0.001 || elevationRatio > 0.01;
// };


const useValidateActivity = (activity) => {
  const suspiciuousData =
    isSuspiciousSpeed(activity)
    || isSuspiciousPace(activity)
    || isSuspiciousDurationAndDistance(activity)
    || isSuspiciousStepsAndDistance(activity)
  // || isSuspiciousElevation(activity)

  return suspiciuousData;
}

export default useValidateActivity;
