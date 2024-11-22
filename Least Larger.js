function leastLarger(a,i) {
  let min_v = Number.MAX_VALUE
  let result_index = -1
  for(let index=0;index<a.length;index++){
    if(a[index]>a[i] && a[index] < min_v ){
      min_v = a[index]
      result_index = index
    }
  }
  return result_index
}
