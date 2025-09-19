function rounders(value) {
  let length = String(value).length-1
  for(let i=0;i<length;i++){
    value = Math.round(value/10)
  }
  return value*Math.pow(10,length)
}
