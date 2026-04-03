function voltage(arr,total){
  const sum = arr.reduce((a,b) => a+b,0)
  return Array.from({length:arr.length},(_,i) =>parseFloat(((arr[i]/sum)*total).toFixed(2)))
}
