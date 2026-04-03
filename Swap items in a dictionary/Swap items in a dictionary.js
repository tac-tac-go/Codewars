function switchDict(dic) {
  const obj = {}
  for(let [key,val] of Object.entries(dic)){
    if(!obj[val]){
      obj[val] = [key]
    }else{
      obj[val].push(key)
    }
  }
  return obj
}
