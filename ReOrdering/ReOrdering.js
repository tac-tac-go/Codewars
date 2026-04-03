function reOrdering(text){
  const arr = text.split(" ")
  const lower = arr.filter(v => /^[^A-Z]+$/.test(v))
  const upper = arr.filter(v => /[A-Z]+/.test(v))
  return upper.concat(lower).join(" ")
}
