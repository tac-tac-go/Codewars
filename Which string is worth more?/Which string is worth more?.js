function highestValue(a, b) {
  const a_v = a.split("").map(v => v.charCodeAt(0)).reduce((a,b) => a+b,0)
  const b_v = b.split("").map(v => v.charCodeAt(0)).reduce((a,b) => a+b,0)
  return a_v >= b_v ? a : b
}
