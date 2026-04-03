export function lastSurvivor(letters: string, coords: number[]): string {
  let letters_arr = letters.split("");
  for(let i of coords){
    letters_arr.splice(i,1);
  }
  return letters_arr.join("")
}
