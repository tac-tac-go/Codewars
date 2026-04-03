function largestPower(n){
  let result = 0
  while(3**result < n){
    result+=1
  }
  return result-1
}
