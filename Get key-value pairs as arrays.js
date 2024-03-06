function keysAndValues(data){
  let result1 = [];
  let result2 = [];
  for(let [key,value] of Object.entries(data)){
    result1.push(key)
    result2.push(value)
  }
  return [result1,result2]
}
