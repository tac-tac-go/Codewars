function howManySmaller(arr,n){
  return arr.map(v => Math.round(v*100)/100).filter(v => v<n).length
}

