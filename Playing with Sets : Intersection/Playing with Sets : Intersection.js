function inter(s1, s2){
  return new Set([...s1].filter((valA) => [...s2].includes(valA)))
}
