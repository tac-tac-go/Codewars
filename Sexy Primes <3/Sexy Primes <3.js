function sexyPrime(x, y){
  return (prime_judge(x) && prime_judge(y)) && (Math.abs(x-y)===6) 
}

function prime_judge(p){
  if(p<2)return false
  for(let i=2;i<p;i++){
    if(p%i===0)return false
  }
  return true
}
