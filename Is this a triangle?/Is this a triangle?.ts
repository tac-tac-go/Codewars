export function isTriangle(a: number, b: number, c: number): boolean {
  [a,b,c] = [a,b,c].sort((a,b) => b-a)
   return a < b+c
}
