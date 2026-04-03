export function sumMix(x: any[]): number {
  return x.map(v=>parseInt(v)).reduce((a,b)=>a+b)
}
