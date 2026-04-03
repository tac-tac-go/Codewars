export function pipeFix(numbers: number[]): any{
  let diff = Math.abs(numbers.slice(-1)[0]-numbers.slice(0,1)[0])+1;
  const array = [...Array(diff).keys()].map(v => v+numbers[0])
  return array
}
