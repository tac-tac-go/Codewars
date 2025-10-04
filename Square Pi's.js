function squarePi(digits){
  const PI100 = "31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679";
  return Math.ceil([...String(PI100).replace(".","").slice(0,digits)].map(v => v**2).reduce((a,b) => a+b,0)**0.5)
}
