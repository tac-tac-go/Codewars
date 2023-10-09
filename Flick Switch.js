function flickSwitch(arr){
  let check = true;
  let result = [];
  for(let i of arr){
    if(i=="flick"){
      check = !check
      result.push(check)
    }else{
      result.push(check)
    }
  }
  return result
}
