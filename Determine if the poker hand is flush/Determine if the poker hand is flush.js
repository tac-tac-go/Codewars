function isFlush(cards) {
  return Array.from(new Set(cards.map(v => v.slice(-1,)))).length===1
}
