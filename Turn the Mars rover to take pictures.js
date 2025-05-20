function turn(current, target) {
  if(current==='N'){
    if(target==='E'){
      return "right"
    }else{
      return "left"
    }
  }else if(current=='S'){
    if(target==='E'){
      return "left"
    }else{
      return "right"
    }
  }else if(current=='E'){
    if(target==='N'){
      return "left"
    }else{
      return "right"
    }
  }
  else{
    if(target==='N'){
      return "right"
    }else{
      return "left"
    }
  }
}
