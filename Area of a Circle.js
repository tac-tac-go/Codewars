function circleArea(r) {
  if(r>0){
    return r*r*Math.PI
  }else{
    throw new Error
  }
}
