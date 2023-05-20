function format(str, arr) {
  for(let v of arr){
    str = str.replace("{}",v)
  }
  return str
}
