function newAvg(arr, newavg) {
  const result = arr.reduce((a,b) => a+b,0)
  if(newavg*(arr.length+1)-result>=0){
    return Math.ceil(newavg*(arr.length+1)-result   )
  }
  throw new Error("Expected New Average is too low");
}
