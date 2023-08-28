function arrayMadness(a, b) {
  return a.map(v => v**2).reduce((a,b) => a+b,0) > b.map(v => v**3).reduce((a,b) => a+b,0)
}
