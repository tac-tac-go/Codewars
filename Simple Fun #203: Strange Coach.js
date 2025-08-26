function strangeCoach(players) {
  let count = {}
  players.map(v => count[v[0]] = (count[v[0]] || 0) + 1)
  const result = Object.entries(count).filter(([k,v]) => v>=5).map(v => v[0])
  result.sort()
  return result.length > 0 ? result.join("") : "forfeit"
}
