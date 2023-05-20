function grabDoll(dolls){
  var bag=[];
  for(let i of dolls){
    if(bag.length>=3){
      break
    }else if((i=="Hello Kitty" || i=="Barbie doll")){
        bag.push(i)
    }else{
      continue
    }
  }
  
  return bag;
}
