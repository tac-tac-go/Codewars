function digitDegree(n) {
  let count = 0;
  while (n >= 10) {
    n = n.toString().split('').reduce((acc, digit) => acc + Number(digit), 0);
    count++;
  }
  return count;
}
