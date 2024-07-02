function secondSymbol(s, symbol) {
  const filterd =  s.split("").map((e,i) => e==symbol ? i:-1).filter(v => v>=0)
  return filterd.length > 1 ? filterd[1] : -1;
}


