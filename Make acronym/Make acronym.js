function toAcronym(inp){
  return inp.toUpperCase().split(" ").map(v => v.slice(0,1)).join("")
}
