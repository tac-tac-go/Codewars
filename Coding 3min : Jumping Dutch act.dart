String sc(int floor) {
  if(floor<=1){
    return ""; 
  }else if(floor<7){
   return "Aa~ "*(floor-1)+"Pa! Aa!"; 
  }else{
    return "Aa~ "*(floor-1)+"Pa!"; 
  }
}
