function modifiedSum(arr, n) {
  return arr.map(i => i**n).reduce((a,b) => a+b,0)-arr.reduce((a,b) => a+b)
}
