export function explode(s: string): string {
  return s.split("").map(i => i.repeat(Number(i))).join("")
}
