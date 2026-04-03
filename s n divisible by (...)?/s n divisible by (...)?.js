function isDivisible(...args){
  return args.slice(1,).every(i => args[0]%i==0)
}
