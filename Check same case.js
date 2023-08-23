function sameCase(a, b){
  const item = /[a-z]/i
  if(item.test(a) && item.test(b)){
    if(a === a.toLowerCase() && b===b.toLowerCase())return 1
    else if(a === a.toUpperCase() && b===b.toUpperCase())return 1
    else return 0
  }else{
    return -1
  }
}
