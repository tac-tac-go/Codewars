function noRepeat(str) {  
  const arr = str.split("")
  return arr.find((ele) => arr.indexOf(ele)===arr.lastIndexOf(ele))
}
