function generatePairs(m, n) {
  let result = []
  for(let i=m;i<=n;i++){
    for(let j=m;j<=n;j++){
      if(i<=j){
        result.push([i,j])
      }
    }
  }
  return result
}
