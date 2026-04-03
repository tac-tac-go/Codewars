const strangeMath = (n, k) => {
  const arr = Array.from({length:n},(_,i) => String(i+1)).sort().map(Number)
  return arr.indexOf(k)+1
}
