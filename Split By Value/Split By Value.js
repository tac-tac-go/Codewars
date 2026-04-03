function splitByValue(k, elements){
  const lower = elements.filter(v => v<k)
  const higher = elements.filter(v => v>=k)
  return lower.concat(higher)
}
