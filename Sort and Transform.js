function sortTransform(a){
  const get_arr = (a) => a.slice(0,2).concat(a.slice(a.length-2,a.length))
  const part1 = get_arr([...a]).map(v => String.fromCharCode(v)).join("")
  const part2 = get_arr([...a].sort((a,b) => a-b)).map(v => String.fromCharCode(v)).join("")
  const part3 = get_arr([...a].sort((a,b) => b-a)).map(v => String.fromCharCode(v)).join("")
  const part4 = get_arr([...[...a].map(v => String.fromCharCode(v)).join("")].sort()).join("")
  return `${part1}-${part2}-${part3}-${part4}`
}
