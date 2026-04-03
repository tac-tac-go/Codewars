function archersReady(archers){
  if(archers.length==0)return false
  return archers.every(v => v>=5);
}
