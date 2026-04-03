function solve(arr) {
  let result = []
  const arr_r = arr.slice().reverse()
  for(let v of arr_r){
    if(result.length==0 || result.slice(-1,) < v){
      result.push(v)   
    }
  }
  return result.slice().reverse()
}
