export function index(array: number[], n: number): number {
  return isNaN(array[n]) ? -1 : array[n]**n
}
