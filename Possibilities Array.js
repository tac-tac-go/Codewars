function isAllPossibilities(x){
  const arr = [...Array(x.length).keys()]
  return arr.every(v => x.includes(v))
}
