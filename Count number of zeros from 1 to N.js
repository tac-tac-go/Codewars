function countZeros(n) {
  let count = 0
  const arr = Array.from({length:n},(_,i) => i+1)
  for(let v of arr){
    count += (String(v).match(/0/g) || []).length
  }
  return count
}
