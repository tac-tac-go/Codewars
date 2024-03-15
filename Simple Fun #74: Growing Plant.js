function growingPlant(upSpeed, downSpeed, desiredHeight) {
  days = 1
  height = upSpeed
  while(height < desiredHeight){
    height += (upSpeed - downSpeed)
    days +=1
  }
  return days
}
