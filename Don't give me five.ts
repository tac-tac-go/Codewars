export function dontGiveMeFive(start:number, end:number) : number
{
  return [...Array(end-start+1).keys()].map(i => i+start).filter(v => String(v).indexOf("5")==-1).length
}
