function removeA(str) {
  let str_a = str.split("")
  return str_a.filter(v => v!="a").join("")
}
