function one(arr, fun){
  return arr.filter(v => fun(v)).length===1
}
