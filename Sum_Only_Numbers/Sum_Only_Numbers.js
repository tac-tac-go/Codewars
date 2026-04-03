function sumNumbers(...args) {
  return args.filter(num => isNaN(num) ? '': num).reduce((a,b) => a+b,0)
}
