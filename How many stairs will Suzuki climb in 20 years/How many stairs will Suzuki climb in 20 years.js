function stairsIn20(stairs){
  return stairs.map(star => star.reduce((a,b) => a+b)).reduce((a,b) => a+b)*20
}
