function twoAndTwoIsFive(x){
  let result = []
  count = 0
  index = 0
  while(count<100000){
    if(String(index).indexOf("4")==-1){
      result.push(index)
      count += 1
    }
    
    index += 1
  }
  return result[x]
}
