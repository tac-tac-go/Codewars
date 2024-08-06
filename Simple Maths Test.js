const prime_number = (n) => {
  if (n<2)return false
  for(let i=2;i<n;i++){
    if(n%i==0)return false
  }
  return true
}


const numberProperty = (n) => {
  return [prime_number(n),n%2==0,n%10==0]
}
