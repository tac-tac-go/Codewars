export function countSheep(num: number): string {
  let result = [...Array(num).keys()]
  return result ? result.map(v => `${v+1} sheep...`).join("") : ""
}
