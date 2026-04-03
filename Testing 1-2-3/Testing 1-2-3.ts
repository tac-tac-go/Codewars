export function number(array: string[]): string[]{
  return array.map((v,i) => `${i+1}: ${v}`)
}
