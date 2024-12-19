function procedure(n){
  const arr = [...Array(101).keys()].filter(v => v%n==0 && v!==0)
  return arr.map(v1 => String(v1).split("").reduce((a,b) => Number(a)+Number(b),0)).reduce((a,b) => a+b,0)
}
