function sumFactorial(args){
  return args.map(v => factorial(v)).reduce((a,b) => a+b,0)
}

function factorial(n){
  return [...Array(n).keys()].map(i => i+1).reduce((a,b) => a*b)
}
