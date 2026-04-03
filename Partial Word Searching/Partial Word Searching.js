function wordSearch(query, seq){
  let result = seq.filter(v => v.toLowerCase().indexOf(query.toLowerCase())!=-1)
  return result.length==0 ? ["Empty"] : result;
}
