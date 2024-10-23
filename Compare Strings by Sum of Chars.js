function compare(s1, s2) {
  s1 = /[^a-z]/gi.test(s1) ? "" : s1
  s2 = /[^a-z]/gi.test(s2) ? "" : s2
  s1 = s1 === null ? "" : s1.toUpperCase()
  s2 = s2 === null ? "" : s2.toUpperCase()
  const s1_a = [...s1].map(v => v.charCodeAt(0)).reduce((a,b) => a+b,0)
  const s2_a = [...s2].map(v => v.charCodeAt(0)).reduce((a,b) => a+b,0)
  return s1_a === s2_a
}
