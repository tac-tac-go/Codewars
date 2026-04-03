export const getEvenNumbers = (numbersArray : number[]) : number[] => {
  return numbersArray.filter(v => v%2==0)
}
