function calculator(distance, busDrive, busWalk)  {
  const walk_t = (distance/walk)*60
  const bus_t =  ((busWalk/walk)+(busDrive/bus))*60
  if(walk_t<10)return "Walk"
  else if(walk_t>120)return "Bus"
  else{
    return walk_t <= bus_t ? "Walk" : "Bus"
  }
}
