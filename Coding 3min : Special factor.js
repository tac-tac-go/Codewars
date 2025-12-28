function sc(n){
  const divisor = []
  for(let i=1;i*i<n;i++){
    if(n%i===0){
      divisor.push(i)
      divisor.push(n/i)
    }
  }
  const BinaryN = divisor.map(v => v.toString(2))
  const result = BinaryN.filter(v => n.toString(2).includes(v)).map(v => parseInt(v,2))
  result.sort((a,b) => a-b)
  return result
}
