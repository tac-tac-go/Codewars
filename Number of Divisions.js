const divisions = (n, divisor) => {
  let count = 0;
  while(n/divisor>=1){
    n = Math.floor(n/divisor)
    count+=1
  }
  return count
};
