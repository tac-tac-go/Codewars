function squares(x, n) {
  if(n<=0)return []
  return [...Array(n).keys()].map(i => x**(2**i))
}

