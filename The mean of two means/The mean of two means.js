function getMean(arr, x, y) {
  if(x <= arr.length && y <= arr.length){
    const x_mean = arr.slice(0,x).reduce((a,b) => a+b,0)/x
    const y_mean = arr.slice(arr.length-y,arr.length).reduce((a,b) => a+b,0)/y
    return x>1 && y>1 ? (x_mean+y_mean)/2 : -1
  }
  return -1
}
