export function adjacentElementsProduct(array: number[]): number {
  return Math.max.apply(null,array.map((n, i)=>n*array[i-1]).slice(1));
}
