function bingo(a) {
  return [2, 7, 9, 14, 15].every(v => a.includes(v)) ? "WIN" : "LOSE";
}
