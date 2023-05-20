function roundIt(n){
  let v = String(n).split(".")
  if(v[0].length > v[1].length){
    return Math.floor(n)
  }else if(v[0].length < v[1].length){
    return Math.ceil(n)
  }else{
    return Math.round(n)
  }
  
}
