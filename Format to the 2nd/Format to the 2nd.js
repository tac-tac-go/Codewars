function printNums(...args) {
  console.log(args)
  let max = Math.max.apply(null,args)
  if(max===0){
    return ""
  }
  let max_d = String(max).length
  return args.map(v => String(v).padStart(max_d,"0")).join("\n")
}
