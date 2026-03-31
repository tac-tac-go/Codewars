function convertCF(num, scale = 'c') {
  if (scale !== 'c' && scale !== 'f') throw new Error('Invalid argument');
  return scale === 'c' ? (num - 32) * (5 / 9) : (num * 9 / 5) + 32;
}
