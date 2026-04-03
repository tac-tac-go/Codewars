function solution(number){
  let resultA = []
  let resultB = []
  let resultC = []
  for(let i=1;i<number;i++){
    if(i%3==0 && i%5!=0){
      resultA.push(i)
    }
    if(i%5==0 && i%3!=0){
      resultB.push(i)
    }
    if(i%3==0 && i%5==0){
      resultC.push(i)
    }
  }
  return [resultA.length,resultB.length,resultC.length]
}
