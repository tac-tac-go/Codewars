function flipNumber(s) {
  for(let i=0;i<s.length;i++){
    s = s.slice(0,i)+s.slice(i,).split("").reverse().join("")
  }
  return s
}
