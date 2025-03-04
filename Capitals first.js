function capitalsFirst(str){
  const arr = str.split(" ")
  const lower = arr.filter((v) => v.charAt(0).match(/^[a-z]/))
  const upper = arr.filter((v) => v.charAt(0).match(/^[A-Z]/))
  return upper.concat(lower).join(" ")
}
