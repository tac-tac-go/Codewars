function nextPal(val) {
  val += 1
  while(String(val)!==String(val).split("").reverse().join("")){
    val+=1
  }
  return val
}
