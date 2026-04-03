export function stairsIn20(stairs:number[][]):number {
  return stairs.map(star => star.reduce((a,b) => a+b)).reduce((a,b) => a+b)*20
}
