function scoreOfDive(scores, tariff) {
  // your code here
  scores = scores.sort((a,b) => a-b).slice(2,5).reduce((a,b) => a+b)*tariff
  return scores.toFixed(2)
}
