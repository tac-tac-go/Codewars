export function gooseFilter (birds: string[]): string[] {
  const geese: string[] = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(v => geese.indexOf(v)==-1)
}
