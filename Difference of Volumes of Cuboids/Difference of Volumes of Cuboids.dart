int findDifference(List<int> a, List<int> b) {
  return (a.reduce((x,y) => x*y)-b.reduce((x,y) => x*y)).abs();
}
