export function unluckyDays(year: number): number {
  let counter = 0;
  for (let i = 1; i <= 12; i++) {
      let d = new Date(i + "/13/" + year);                          
      if (d.getDay() == 5) {
          counter++;
      }
  }
  return counter;
}
