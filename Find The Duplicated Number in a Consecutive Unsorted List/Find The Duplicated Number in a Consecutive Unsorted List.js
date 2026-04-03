function findDup( arr ){
  return arr.filter((val,i) => arr.indexOf(val) != i)[0]
}
