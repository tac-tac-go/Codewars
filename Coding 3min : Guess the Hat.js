function sc(exchange){
  let pos = 2
  for(let tmp of exchange){
     let [v1,v2] = tmp.split("-").map(Number)
     if(v1===pos){
       pos = v2
     }else if(v2===pos){
       pos = v1
     }else{
       continue
     }
  }
  return String(pos)
}
