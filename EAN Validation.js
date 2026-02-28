function validateEAN(eanCode) {
  let v  = [...eanCode.slice(0, 12)].map((v,i) => (i+1)%2===0 ? Number(v)*3 : Number(v)).reduce((a,b) => a+b,0)
  v = v%10===0 ? 0 : 10-(v%10)
  return v===Number(eanCode.slice(eanCode.length-1))
}
