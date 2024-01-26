function nbDig(n, d) {
  return ([...Array(n+1).keys()].map(i => String(i**2)).join("").match(new RegExp(d,"g")) || []).length
}
