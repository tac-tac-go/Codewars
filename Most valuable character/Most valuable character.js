function solve(st) {
  result = []
  Array.from(new Set([...st])).map(v => {
    result.push({"alpha" : v,"v":st.lastIndexOf(v)-st.indexOf(v)})
  })
  result.sort((a,b) => b.v-a.v || a.alpha.localeCompare(b.alpha))
  return result[0].alpha
}
