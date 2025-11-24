function twins(myArray){
  let count = {}
  myArray.map(v => count[v] = (count[v] || 0) + 1)
  return !Object.values(count).filter(v => v!==2).length
}
