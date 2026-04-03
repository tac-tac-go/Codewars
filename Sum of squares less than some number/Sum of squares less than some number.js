function getNumberOfSquares(n) {
  let count = 0;
  let sum = 0;
  let start = 1;
  while(sum < n){
    sum+=start**2
    if(sum<n){
      start+=1
      count+=1 
    }
  }
  return count
}
