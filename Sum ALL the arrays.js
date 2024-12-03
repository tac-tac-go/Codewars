function arraySum(arr) {
  return arr.flat(Infinity).filter(v => typeof v === 'number').reduce((a,b) => a+b,0)
}
