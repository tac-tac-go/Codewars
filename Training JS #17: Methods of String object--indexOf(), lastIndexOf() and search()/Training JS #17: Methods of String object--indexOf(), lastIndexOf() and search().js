function firstToLast(str,c){
  if(str.indexOf(c)!==str.lastIndexOf(c)){
    return str.lastIndexOf(c)-str.indexOf(c)
  }else if(str.indexOf(c)===str.lastIndexOf(c) && (str.indexOf(c)!==-1 && str.lastIndexOf(c)!==-1)){
    return 0
  }else {
    return -1
  }
}
