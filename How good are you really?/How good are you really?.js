function betterThanAverage(classPoints, yourPoints) {
  let avg = classPoints.reduce((a,b)=>a+b)/classPoints.length;
  return yourPoints > avg ?  true : false;
}

