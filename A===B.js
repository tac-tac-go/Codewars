function d01(a,b){
  let result = Array.from(new Set([a,b])).length-1
  if(!result){
    return true
  }else{
    return false
  }
}
