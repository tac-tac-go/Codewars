function countBy(x, n) {
  return [...Array(n).keys()].map(v=>(v+1)*x)
}
