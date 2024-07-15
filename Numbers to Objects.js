function numObj(s){
  let result = []
  for(let v of s){
    const obj = {[v]:String.fromCharCode(v)};
    result.push(obj)
  }
  return result
}
