function maxMin(arr1,arr2){
  const arr = arr1.map((_,i) => Math.abs(arr1[i]-arr2[i]))
  return [Math.max.apply(null,arr),Math.min.apply(null,arr)]
}
