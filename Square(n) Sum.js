function squareSum(numbers){
  if(numbers.length ==0){return 0}
  return numbers.map(v => v**2).reduce((a,b)=>a+b)
}
