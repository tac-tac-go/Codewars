function distancesFromAverage(arr){
  const ave = arr.reduce((a,b) => a+b,0)/arr.length
  return arr.map(v => Math.round((ave-v)*100)/100)
}
