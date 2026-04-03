function compute(n){
  if(n<3 || n%2===0)return 0
  let result = 0
  for(let i=1;i<=n;i+=2){
    result+=(1/(i**2))
  }
  return result
}
