function longest(s1, s2) {
  return Array.from(new Set(s1.concat(s2))).sort().join("")
}
