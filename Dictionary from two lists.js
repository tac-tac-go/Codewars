function createDict(keys, values){
  let dic = {}
  keys.map((e,i) => {
      if(i<values.length){
        dic[e]=values[i]
      }else{
        dic[e]=null
      }
  })
  return dic
}
