function maxProduct(a) {
  const max_c = (tmp_a) => Math.max.apply(null,tmp_a)
  const max_v = max_c([...a])
  a.splice(a.indexOf(max_v),1)
  const max_t = max_c(a)
  return max_v * max_t
}
