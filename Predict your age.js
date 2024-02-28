function predictAge(...args){
  return Math.floor((args.map(i => i**2).reduce((a,b) => a+b,0)**0.5)/2)
}
