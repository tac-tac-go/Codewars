function firstNonRepeatingLetter(s) {
  const s_c = s.toLowerCase()
  const index = s_c.split("").findIndex(v => s_c.indexOf(v)==s_c.lastIndexOf(v))
  return index===-1 ? '' : s[index]
}
