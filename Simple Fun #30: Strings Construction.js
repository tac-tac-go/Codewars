function stringsConstruction(A, B) {
  let count_a = {}, count_b = {};
  A.split("").map(v => count_a[v] =  (count_a[v] || 0) + 1)
  B.split("").map(v => count_b[v] =  (count_b[v] || 0) + 1)
  return Math.min(...Object.entries(count_a).map(([k,v]) => Math.floor((count_b[k] || 0)/count_a[k])))
}
