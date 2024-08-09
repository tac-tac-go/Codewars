function trim(str, size) {
  if(str.length > size){
    return str.slice(0,size<=3 ? size : size-3)+"..."
  }
  return str
}
