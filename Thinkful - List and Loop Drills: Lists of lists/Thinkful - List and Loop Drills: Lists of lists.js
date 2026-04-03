function processData(data){
  return data.map(tmp => tmp[0]-tmp[1]).reduce((a,b) => a*b)
}
