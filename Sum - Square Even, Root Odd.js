const sumSquareEvenRootOdd = ns => {
  const result = ns.map(v => v%2 ? v**0.5 : v**2).reduce((a,b) => a+b,0)
  return (Math.round(result*100))/100
};
