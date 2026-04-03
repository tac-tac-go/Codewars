const layers = (n) => {
  let p = 1
  let count = 1
  while(p*p < n){
    p+=2
    count+=1
  }
  return count
}
