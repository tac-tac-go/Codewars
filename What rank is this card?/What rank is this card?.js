function rank(card) {
  const rankMap = {
    'T': 10,
    'J': 11,
    'Q': 12,
    'K': 13,
    'A': 14
  }
  const first = card[0]
  if(/[2-9]/.test(first)){
    return parseInt(first)
  }else{
    return rankMap[first] ?? 0
  }
}
