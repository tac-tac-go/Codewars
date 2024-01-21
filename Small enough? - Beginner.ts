export function smallEnough(a: number[], limit: number): boolean{
  return a.every(v => v<=limit)
}
