function direction(facing, turn) {
  const direc = ["N", "NE", "E", "SE", "S", "SW", "W", "NW", "N"];
  const rot = [0, 45, 90, 135, 180, 225, 270, 315, 360];
  let turn_v = rot[direc.indexOf(facing)] + turn;
  turn_v = turn_v < 0 ? 360 - (Math.abs(turn_v) % 360) : turn_v % 360;
  return direc[rot.indexOf(turn_v)];
}


