export function powersOfTwo(n:number):number[]{
  return [...Array(n+1).keys()].map(v => 2**v);
}
