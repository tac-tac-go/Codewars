function any(arr, fun){
  return arr.filter(v => fun(v,1)).length>0
}
