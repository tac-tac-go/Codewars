bool betterThanAverage(List<int> classPoints, int yourPoints) {
  var avg =  classPoints.reduce((a,b) => a+b)/classPoints.length;
  return yourPoints > avg;
}
