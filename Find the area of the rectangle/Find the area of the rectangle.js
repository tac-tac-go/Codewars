function area(d,l){
  if(d<=l)return "Not a rectangle"
  const l2 = Math.sqrt(d**2 - l**2)
  return Math.round((l*l2)*100)/100
}
