function duplicateEncode(word){
  word = word.toLowerCase()
  let count = {}
  word.split("").map(v => count[v] = (count[v] || 0) + 1)
  Object.entries(count).map(([key,value]) => {
    count[key] = value===1 ? "(" : ")"
  })
  let result = ""
  word.split("").map(v => result+=count[v])
  return result;
}

