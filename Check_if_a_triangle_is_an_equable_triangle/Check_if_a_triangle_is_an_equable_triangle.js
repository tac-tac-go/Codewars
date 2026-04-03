function equableTriangle(a,b,c) {
//Your code here!
  s = (a+b+c)/2
  area = (s*(s-a)*(s-b)*(s-c))**0.5
  if(area%1==0 && area==(a+b+c)){
    return true
  }else{
    return false
  }
}
