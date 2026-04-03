function solveIt(excel,n){
  let result = []
  excel.map((v,i) => result.push({v,i}))
  result.sort((a,b) => a.v - b.v || a.i-b.i)
  for (let pos = 0; pos < result.length; pos++) {
    if (result[pos].i === n) return pos + 1; 
  }
}
