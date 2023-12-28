export function accum(s: string): string {
  return s.split("").map((v,i) => v.repeat(i+1)).map(v => v.slice(0,1).toUpperCase()+v.slice(1).toLowerCase()).join("-")
}
