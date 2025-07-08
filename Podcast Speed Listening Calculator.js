function speedListen(audioLength, playSpeed) {
  const [hours, minutes, seconds] = audioLength.split(":").map(Number);
  let totalSeconds = hours * 3600 + minutes * 60 + seconds;
  totalSeconds/=playSpeed
  const hours_r = Math.floor(totalSeconds / 3600); 
  const minutes_r = Math.floor((totalSeconds % 3600) / 60); 
  const seconds_r = Math.floor(totalSeconds % 60); 
  return `${hours_r.toString().padStart( 2, '0')}:${minutes_r.toString().padStart( 2, '0')}:${seconds_r.toString().padStart( 2, '0')}` 
}
