export function houseNumbersSum(inputArray: number[]): number {
  return inputArray.slice(0,inputArray.indexOf(0)).reduce((a,b) => a+b,0)
}
