function mergeArrays(a, b) {
  const min_length = Math.min.apply(Math,[a.length,b.length])
  let result = []
  for(let i=0;i<min_length;i++){
    result.push(a[i])
    result.push(b[i])
  }
  if(a.length>b.length){
    result.push(...a.slice(min_length,))
  }else if(b.length>a.length){
    result.push(...b.slice(min_length,))
  }
  return result
}
