function array(string) {
  let arr = string.split(",")
  if(arr.length<=2)return null
  return arr.slice(1,-1).join(" ")
}
