export function isVeryEvenNumber(n: number): boolean {
  let result:number = n;
  while(String(result).length > 1){
    result = String(result).split('').reduce((a,b) => Number(a) + Number(b), 0);
  }
  return result % 2 === 0;
}
