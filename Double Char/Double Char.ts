export function doubleChar(str: string): string{
  return str.split("").map(v => v+v).join("")
}
