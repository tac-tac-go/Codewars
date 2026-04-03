const whatTimeIsIt = (angle) => {
  let hr = Math.floor(angle / 30);
  let mn = Math.floor((angle % 30) * 2);
  if (hr === 0) {
      hr = 12;
  }
  return hr.toString().padStart(2, '0') + ':' + mn.toString().padStart(2, '0');
}
