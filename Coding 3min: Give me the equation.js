function sc(a,b,c){
  let arr = [a,b,c].sort((a,b) => a-b)
  let [a1,b1,c1] = [...arr]
  if(a1+b1===c1){
    return `${a1}+${b1}=${c1}`
  }else if(a1*b1===c1){
    return `${a1}*${b1}=${c1}`
  }else{
    return ""
  }
}
