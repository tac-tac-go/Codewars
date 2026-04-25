function climb(n){
  let result = [n]
  while(n>1){
    n = n%2===0 ? n/2 : (n-1)/2
    result.push(n)
  }
  result.sort((a,b) => a-b)
  return result
}
