export function betterThanAverage(classPoints: number[], yourPoints: number) : boolean {
  let average = classPoints.reduce((a,b) => a+b)/classPoints.length
  return yourPoints >=average ? true : false;
}
