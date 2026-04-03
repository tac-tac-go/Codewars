export function solve(arr: string[]) : number[] {
  let alpha = "abcdefghijklmnopqrstuvwxyz"
  return arr.map(string => string.split("").filter((s,i) => alpha.indexOf(s.toLowerCase()) == i ).length)
}
