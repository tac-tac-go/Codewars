export const iceBrickVolume = (radius: number, bottle_length: number, rim_length: number): number => {
  return (bottle_length - rim_length) * 2 * radius ** 2
}
