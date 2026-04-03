function tidyNumber(n){
  let arr = [...n.toString()].map((digit) => parseInt(digit))
  return arr.every((x,i) => i===0 || x >= arr[i-1])
}
