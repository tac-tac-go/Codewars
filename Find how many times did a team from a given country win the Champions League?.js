function countWins(winnerList, country) {
  return winnerList.filter(dic => dic['country']===country).length
}
