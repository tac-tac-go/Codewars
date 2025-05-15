function symDiff(s1, s2){
  const arr1 = [...new Set([...s1,...s2])]
  const arr2 = [...s1].filter(v => s2.has(v))
  return new Set(arr1.filter(v => !arr2.includes(v)))
}
