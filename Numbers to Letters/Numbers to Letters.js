function switcher(x){
  const alpha = 'zyxwvutsrqponmlkjihgfedcba!? ';
  return x.map(e => alpha[Number(e)-1]).join("")
}
