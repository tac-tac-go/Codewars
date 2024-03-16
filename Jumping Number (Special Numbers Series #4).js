function jumpingNumber(n){
  n = String(n)
  if(n.length==1)return "Jumping!!"
  return [...Array(String(n).length-1).keys()].map(i => n.slice(i,i+2)).every(i => "0123456789876543210".indexOf(i)!=-1) ? "Jumping!!" : "Not!!"
}
