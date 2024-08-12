export function divisions(n: number, divisor: number): number {
  let count = 0;
  while(n/divisor>=1){
    n = Math.floor(n/divisor)
    count+=1
  }
  return count
}
