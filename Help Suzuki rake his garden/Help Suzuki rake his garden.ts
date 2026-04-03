export function rakeGarden(garden:string):string {
  return garden.split(" ").map(s => s==="rock" || s==="gravel" ? s : "gravel").join(" ")
}
