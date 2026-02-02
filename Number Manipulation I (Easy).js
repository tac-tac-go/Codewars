function manipulate(num) { 
  const s = String(num)
  if(s.length%2===1){
    return Number(s.slice(0,s.length/2)+"0".repeat(s.length/2+1))
  }else{
    return Number(s.slice(0,s.length/2)+"0".repeat(s.length/2))
  }
}
