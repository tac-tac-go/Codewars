function lowest(a, b, c) {
  // Good luck!
  return [a.reduce((a,b) => Math.min(a,b)),b.reduce((a,b) => Math.min(a,b)),c.reduce((a,b) => Math.min(a,b))]
}
