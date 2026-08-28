export function squaresNeeded(grains: number) {
  return grains===0 ? 0 : Math.floor(Math.log2(grains))+1
}
