function charToAscii(string){
  string = string.replace(/[^a-z]/ig,"")
  let result = {}
  if(string.length>0){
    for(let v of Array.from(new Set(string))){
      result[v] = v.charCodeAt(0)
    }
  }else{
    return null
  }
  return result
}
