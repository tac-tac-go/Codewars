function count(string) {
  let result = {}
  string.split("").map(v => result[v] = (result[v] || 0) + 1)
  return result
}
