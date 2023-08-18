function sumOfDifferences(arr) {
  return arr.sort((a,b) => b-a).slice(1).map((v,i) => arr[i]-v).reduce((a,b) => a+b)
}
