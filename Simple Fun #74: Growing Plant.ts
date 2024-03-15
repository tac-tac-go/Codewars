export function growingPlant(upSpeed: number, downSpeed: number, desiredHeight: number): number {
  let days = 1
  let height = upSpeed
  while(height < desiredHeight){
    height += (upSpeed - downSpeed)
    days +=1
  }
  return days
}
