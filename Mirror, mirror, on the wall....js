function mirror(data) {
  const sorted = [...data].sort((a,b) => a-b)
  const sorted_r  = [...sorted].reverse()
  return sorted.concat(sorted_r.slice(1,))
}
