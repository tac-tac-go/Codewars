function invertHash(hash) {
  let result = {}
  for(let [key,value] of Object.entries(hash)){
    result[value]=key
  }
  return result
}
