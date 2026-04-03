int growingPlant(int upSpeed, int downSpeed, int desiredHeight) {
  int days = 1;
  int height = upSpeed;
  while(height < desiredHeight){
    days +=1;
    height += (upSpeed-downSpeed);
  }
  return days;
}
