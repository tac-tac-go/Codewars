int stairsIn20(List<List<int>> arr) {
  return arr.map((star) => star.reduce((a,b) => a+b)).reduce((a,b) => a+b)*20;
}
