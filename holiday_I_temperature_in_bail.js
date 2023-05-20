function bareable(heat, humidity){
  if(humidity >= 0.5 || heat>=36){
    return false
  }else if(((25 < heat) && (heat < 36)) && (humidity > 0.4)){
    return false
  }else{
    return true
  }
}
