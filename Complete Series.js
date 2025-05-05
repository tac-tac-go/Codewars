function completeSeries(arr) {
  const arr_s = Array.from(new Set(arr))
  const max = Math.max.apply(null,arr)
  const arr_r = Array.from({length:max+1},(_,i) => i)
  if(arr_s.length===arr.length){
    return arr_r
  }else{
    return [0]
  }
}
