function powersUp(number, upTo) {
  let result1 = []
  let result = 0
  for (let i = 1; i <= upTo; i++){
    result += Math.pow(number, i)
  }
  return result
}
