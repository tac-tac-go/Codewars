function divisibleByThree(str){
  return str.split("").map(e => Number(e)).reduce((a,b) => a+b,0)%3==0
}
