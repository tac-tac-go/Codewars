function sortDict(dict) {
  let dic = []
  const isNumeric = (string) => string == Number.parseFloat(string)
  for(let [i,v] of Object.entries(dict)){
    dic.push({"index": isNumeric(i) ? parseInt(i) : i,"value":v})
  }
  dic.sort((a,b) => b.value-a.value )
  return dic.map(v => [v.index,v.value])
}
