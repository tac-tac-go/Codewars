function reverseByCenter(s){
  const middle = Math.floor(s.length/2);
  if(s.length%2==0){
    return s.slice(middle,)+s.slice(0,middle)
  }else{
    return s.slice(middle+1,)+s.slice(middle,middle+1)+s.slice(0,middle)
  }
}
