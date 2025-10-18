function stringToIntArray(s){
  const result  = s.replace(/,{2,}/g,",").replace(/,*$/, "").replace(/^,*/, "")
  return result ? result.split(",").map(Number) : []
}
