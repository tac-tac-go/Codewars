function getSumOfDigits(integer) {
  return String(integer).split("").map(i => parseInt(i)).reduce((a,b) => a+b)
}
