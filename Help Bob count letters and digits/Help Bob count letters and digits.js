function countLettersAndDigits(input) {
  return input.split("").map(i => /[a-z0-9]/i.test(i) ? 1 : 0).reduce((a,b) => a+b,0)
}
