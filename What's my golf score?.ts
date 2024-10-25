export function golfScoreCalculator(parList: string, scoreList: string): number {
  return [...Array(parList.length).keys()].map((_,i) => parseInt(scoreList[i])-parseInt(parList[i])).reduce((a,b) => a+b,0)
}
