const isMonotone = (arr) => {
  return arr.every((v,i) => i===0 ? true : arr[i]>=arr[i-1]); 
}
