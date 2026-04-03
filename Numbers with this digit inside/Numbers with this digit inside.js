function numbersWithDigitInside(x, d) {
  let result = [...Array(x).keys()].map(i => i+1).filter(v => String(v).includes(String(d)))
  return [result.length,result.reduce((a,b) => a+b,0),result.length===0 ? 0 : result.reduce((a,b) => a*b,1)]
}
