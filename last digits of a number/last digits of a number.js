function lastDigit(n, d) {
  if(d<=0)return []
  return String(n).slice(-d).split("").map(v => parseInt(v))
}
