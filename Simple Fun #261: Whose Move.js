function whoseMove(lastPlayer, win) {
  if(lastPlayer=="black"){
    if(win)return lastPlayer
    return "white"
  }else{
    if(win)return lastPlayer
    return "black"
  }
}
