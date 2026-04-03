export function isIsogram(str: string): boolean{
  return Array.from(new Set(str.toLowerCase())).length==str.toLowerCase().length
}
