function geometricSequenceElements(a, r, n){
  let result = []
  for(let i=1;i<=n;i++){
    result.push(String(a))
    a*=r
  }
  return result.join(", ")
}
