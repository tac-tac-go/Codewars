export function nextHappyYear(year: number): number {
  year+=1
  while(Array.from(String(year)).length!=Array.from(new Set(String(year))).length){
    year+=1
  }
  return year
}
