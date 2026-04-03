export function vaporcode(str: string ): string {
  return str.replace(/\s+/g,"").split("").map(v => v.toUpperCase()).join("  ")
}
