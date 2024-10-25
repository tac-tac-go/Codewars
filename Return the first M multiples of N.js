function multiples(m, n){
  return [...Array(m).keys()].map(v => n*(v+1))
}
