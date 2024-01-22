function sumDigits(number) {
  return String(Math.abs(number)).split("").map(v => parseInt(v)).reduce((a,b) => a+b,0)
}

