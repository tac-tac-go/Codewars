const testit = (a,b) => {
  return [...Array.from(new Set(a)).concat(Array.from(new Set(b)))].sort((a,b) => a-b)
}
