int digitalRoot(int number) {
  if (number < 10) return number;
  final sum = number
      .toString()
      .split('')
      .map(int.parse)
      .reduce((a, b) => a + b);
  return digitalRoot(sum);
}
