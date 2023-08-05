int squareSum(List numbers) {
  num sum = 0;
  for(var i = 0; i < numbers.length; i++) {
      sum += numbers[i] * numbers[i];
  }
  return sum.toInt();
}
