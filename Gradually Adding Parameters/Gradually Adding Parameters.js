function add(...args) {
  return args.map((v,i) => v*(i+1)).reduce((a,b) => a+b,0)
}
