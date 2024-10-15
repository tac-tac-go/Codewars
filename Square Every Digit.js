function squareDigits(num){
  return parseInt(String(num).split("").map(v => String(parseInt(v)**2)).join(""))
}
