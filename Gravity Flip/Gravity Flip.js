const flip=(d, a)=>{
  if(d=="L"){
    return a.sort((a,b) => b-a)
  }else{
    return a.sort((a,b) => a-b)
  }
}
