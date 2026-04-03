function seqlist(first, c, l) {
  let result = []
  let tmp = first
  for(let i=0;i<l;i+=1){
    result.push(tmp)
    tmp+=c
  }
  return result
}
