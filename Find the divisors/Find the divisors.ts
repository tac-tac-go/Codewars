export function divisors(integer: number): number[] | string {
  const result = Array.from({length:integer},(_,i) => i+1).filter(v => v!==1 && v!==integer && integer%v===0);
  return result.length!==0 ? result : `${integer} is prime`;
}

