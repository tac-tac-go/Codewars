function filterHomogenous(arrays) {
  return arrays.map(array => Array.from(new Set(array.map(v => typeof v))).length==1 ? array : []).filter(v => v.length >0)
}
