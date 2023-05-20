function positiveSum(arr) {
  arr.push(0)
  return arr.filter(v => v>=0).reduce((a,b) => a+b)
}
