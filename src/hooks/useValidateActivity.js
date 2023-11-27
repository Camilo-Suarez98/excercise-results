const isSuspiciousSpeed = (activity) => {
  const minSpeed = 2.5;
  const maxSpeed = 3.5;

  const averageSpeed = activity.AverageSpeedInMetersPerSecond;
  return averageSpeed > minSpeed
    && averageSpeed < maxSpeed
    || averageSpeed === null
    || averageSpeed === 0;
};

const isSuspiciousPace = (activity) => {
  const averagePace = activity.AveragePaceInMinutesPerKilometer;

  return averagePace > 4
    && averagePace < 6
    || averagePace === null
    || averagePace === 0;
}

const isSuspiciousDurationAndDistance = (activity) => {
  const calculatedSpeed = activity.DistanceInMeters / activity.DurationInSeconds;

  return Math.abs(activity.AverageSpeedInMetersPerSecond - calculatedSpeed) > 0.5
    || calculatedSpeed === null
    || calculatedSpeed === 0;
};

const isSuspiciousStepsAndDistance = (activity) => {
  const calculatedSteps = activity.AverageSpeedInMetersPerSecond * activity.DurationInSeconds;

  return Math.abs(activity.Steps - calculatedSteps) > 1000
    || calculatedSteps === null
    || calculatedSteps === 0;
};

const useValidateActivity = (activity) => {
  const suspiciuousData =
    isSuspiciousSpeed(activity)
    || isSuspiciousPace(activity)
    || isSuspiciousDurationAndDistance(activity)
    || isSuspiciousStepsAndDistance(activity)

  return suspiciuousData;
}

export default useValidateActivity;
