function powersOfTwo(n){
  return [...Array(n+1).keys()].map(v => 2**v)
}
