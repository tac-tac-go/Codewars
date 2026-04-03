function isRotation(s1, s2){
  // ... 
  if(s1.length!=s2.length){
    return false
  }else{
   s2 = s2.repeat(2)
   console.log(s1,s2)
   return s2.indexOf(s1)!=-1 ? true : false; 
  }
}
