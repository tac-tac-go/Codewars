function numberToPower(number, power){
  result=1
  for(let i=1;i<=power;i++){
    result*=number
  }
  return result
}
