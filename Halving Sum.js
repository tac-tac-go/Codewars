function halvingSum(n) {
  let index = 1
  let result = 0
  while(Math.floor(n/index)>=1){
    result+=Math.floor(n/index)
    index*=2
  }
  return result
}

