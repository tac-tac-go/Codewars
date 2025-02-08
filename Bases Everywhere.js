const baseFinder = (seq) => {
  return (new Set(seq.join(""))).size
}
