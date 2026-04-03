function sequence(x) {
  return [...Array(x).keys()].map(i => i+1).sort()
}
