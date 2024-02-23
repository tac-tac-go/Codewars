function divCon(x){
  let count=0;
  for(let i of x){
    if(typeof(i)=="string"){
      count-=Number(i)
    }else{
      count+=i
    }
  }
  return count
}
