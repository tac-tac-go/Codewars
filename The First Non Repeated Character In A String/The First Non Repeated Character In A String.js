function firstNonRepeated(s) {
  const arr = s.split("")
  return arr.find(v => arr.indexOf(v)===arr.lastIndexOf(v)) || null
}
