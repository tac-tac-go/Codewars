function closeCompare(...args){
  const [a,b,...margin] = args
  if(args.length==2){
    if(a<b){
      return -1
    }else if(a>b){
      return 1
    }else{
      return 0
    }
  }else{
    let dis = Math.abs(a-b)
    if(dis <= margin){
      return 0
    }else{
      if(a<b){
        return -1
      }else if(a>b){
        return 1
      }else{
        return 0
      }
    }
  }
}

