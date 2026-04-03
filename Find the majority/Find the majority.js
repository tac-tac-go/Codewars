function majority(arr) {
  let count = {}
  arr.map(v => count[v] = (count[v] || 0) + 1)
  let max_v = Object.entries(count).filter(([k,v],i) => v===Math.max.apply(null,Object.values(count)))
  return max_v.length===1 ? max_v[0][0] : null
}
