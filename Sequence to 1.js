function seqToOne(n){
  const step = n>1 ? -1 : 1
  let result = []
  for(let i=n;i!==1;i+=step){
    result.push(i)
  }
  result.push(1)
  return result
}
