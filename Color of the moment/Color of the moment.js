function hexToTime(hexCode) {
  let [h, m, s] = hexCode.slice(1).match(/.{2}/g).map(x => parseInt(x, 16));
  if (h > 23 || m > 59 || s > 59) {
    throw new Error("Thats not a valid time!");
  }
  return [h, m, s]
    .map(val => String(val).padStart(2, '0'))
    .join(':');
}
