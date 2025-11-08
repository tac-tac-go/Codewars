function sortByHeight(a) {
  const sorted = a.filter(v => v !== -1).sort((a, b) => b-a);
  return a.map(v => v == -1 ? -1 : sorted.pop())
}
