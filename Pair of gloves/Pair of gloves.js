const numberOfPairs = (gloves) => {
  let count = {}
  gloves.map(v => count[v] = (count[v] || 0) + 1)
  return Object.values(count).map(v => Math.floor(v/2)).reduce((a,b) => a+b,0)
}
