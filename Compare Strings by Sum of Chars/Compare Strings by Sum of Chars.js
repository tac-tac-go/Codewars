function compare(s1, s2) {
  if(/[^a-z]/gi.test(s1) || !s1)s1=""
  if(/[^a-z]/gi.test(s2) || !s2)s2=""
  const s1_a = [...s1.toUpperCase()].map(v => v.charCodeAt(0)).reduce((a,b) => a+b,0)
  const s2_a = [...s2.toUpperCase()].map(v => v.charCodeAt(0)).reduce((a,b) => a+b,0)
  return s1_a === s2_a
}
