function findScreenHeight(width, ratio) {
  const [w_r,h_r] = ratio.split(":").map(Number)
  return `${width}x${Math.floor(width/w_r)*h_r}`
}
