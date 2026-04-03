function combine(...args) {
  let result = {}
  for(let arg of args){
    for(let [key,value] of Object.entries(arg)){
      if(result[key]){
        result[key]+=value
      }else{
        result[key]=value
      }
    }
  }
  console.log(result)
  return result
}
