function differenceOfSquares(n){
  const val1 = [...Array(n).keys()].map(i => i+1).reduce((a,b) => a+b,0)**2
  const val2 =  [...Array(n).keys()].map(i => (i+1)**2).reduce((a,b) => a+b,0)
  return val1-val2
}
