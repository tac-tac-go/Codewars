export function addLength(str: string): string[] {
  return str.split(" ").map((v:string) => `${v} ${v.length}`)
}
