function arrAdder(arr) {
  const transpose = a => a[0].map((_, c) => a.map(r => r[c]));
  return transpose(arr).map(v => v.join("")).join(" ")
} 
