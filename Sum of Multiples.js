function sumMul(n,m){
  if(n>=m)return "INVALID"
  let result = []
  for(let i =n;i<=m;i+=n){
    if(i%m!=0){
      result.push(i)  
    }
  }
  return result.reduce((a,b) => a+b,0)
}
