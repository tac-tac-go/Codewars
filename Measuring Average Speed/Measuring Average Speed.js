function calculateSpeed(distance, time) {
  const distNum = parseFloat(distance);
  const distInMeters = distance.includes("km") ? distNum * 1000 : distNum;
  const timeNum = parseFloat(time);
  const timeInSeconds = time.includes("min") ? timeNum * 60 : timeNum;
  const speedMph = (distInMeters / timeInSeconds) * 2.23694;
  return Math.round(speedMph) + "mph";
}
