export function squareOrSquareRoot(array:number[]) : number[] {
  return array.map(v => (v**0.5)%1==0 ? v**0.5 : v**2);
}
