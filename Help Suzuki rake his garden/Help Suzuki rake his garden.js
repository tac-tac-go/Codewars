function rakeGarden(garden) {
  return garden.split(" ").map(s => s==="rock" || s==="gravel" ? s : "gravel").join(" ")
}
