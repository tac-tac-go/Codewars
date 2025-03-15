function diff(a, b){
  const set_a = new Set([...a])
  const set_b = new Set([...b])
  const set_val = [...a].filter(v => set_b.has(v))
  const set_ab = [...a,...b]
  return Array.from(new Set(set_ab.filter(v => !set_val.includes(v)))).sort()
}
