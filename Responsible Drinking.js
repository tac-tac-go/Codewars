function hydrate(s) {
  const result = s.split(/[^0-9]/g).filter(v => String(v).length>0).map(Number).reduce((a,b) => a+b,0)
  return result>1 ? `${result} glasses of water` : `${result} glass of water`
}
