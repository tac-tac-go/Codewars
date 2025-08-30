function cyclops(n) {
  const s = n.toString(2)
  return s.length%2===1 && s.slice(0,s.length/2).indexOf("0")===-1 && s.slice(s.length/2+1,).indexOf("0")===-1 && s.slice(s.length/2,s.length/2+1)==="0"
}
