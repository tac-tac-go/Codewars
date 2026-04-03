function canIPlay(now,start,end) {
  if(start < end){
    if(start <= now && now < end)return true
    else return false
  }else{
    if(start <= now || now < end)return true
    else return false
  }
}
