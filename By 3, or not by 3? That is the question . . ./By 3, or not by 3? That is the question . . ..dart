bool divisibleByThree(String str) {
  return str.split('').map((item) => int.parse(item)).reduce((a, b) => a + b) % 3 == 0;
}
