function fourPiles(n, y) {
  const x = n * y / (2 * y + y * y + 1);
  const result = [x + y, x - y, x * y, x / y];
  return !result.filter(n => n % 1 || n <= 0).length && result || [];
}
