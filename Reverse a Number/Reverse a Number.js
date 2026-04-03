function reverseNumber(n) {
  return Number(String(Math.abs(n)).split("").reverse().join("")) * (n<0 ? -1 : 1)
}
