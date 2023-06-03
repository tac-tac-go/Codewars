export function firstNonConsecutive (arr: number[]) : null | number {
  const judge = arr.find((value,index,array) : boolean => value - array[index-1] > 1)
  return judge==undefined ? null : judge
}
