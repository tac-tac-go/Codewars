function sizeToNumber(size) {
  if (typeof size !== 'string') return null;
  const match = size.match(/^(x*)([sl])$/);
  if (match) {
    const n = match[1].length; 
    return match[2] === 's' ? 36 - 2 * n : 40 + 2 * n;
  }
  return size === 'm' ? 38 : null;
}
