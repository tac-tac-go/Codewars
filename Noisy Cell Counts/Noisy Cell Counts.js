function cleanedCounts(data) {
  let m = 0;
  return data.map(e => m=Math.max(m,e))
}
