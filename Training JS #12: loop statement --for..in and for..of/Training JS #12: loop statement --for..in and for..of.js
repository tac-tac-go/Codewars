function giveMeFive(obj){
  //coding here
  let result = [];
  for(const v in obj){
    if(v.length==5){
      result.push(v)
    }
    if(obj[v].length==5){
      result.push(obj[v])
    }
  }
  return result
}

