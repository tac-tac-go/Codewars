export function positiveSum(arr:number[]):number {
  return arr.filter(v => v>=0).reduce((a,b) => a+b,0);
}
