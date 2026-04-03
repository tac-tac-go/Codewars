function last(...args){
  try {
    return args.slice(-1)[args.length-1].slice(-1)[0]
  }catch(err){
    return args.slice(-1)[0]
  }
}

