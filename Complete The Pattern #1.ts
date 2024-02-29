export function pattern(n: number): string {
  if(n<1)return ""
  return [...Array(n).keys()].map(i => String(i+1).repeat(i+1)).join("\n")
}
