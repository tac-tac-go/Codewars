function sumSquares(array) {
  return array.map(v => v**2).reduce((a,b) => a+b)
}
