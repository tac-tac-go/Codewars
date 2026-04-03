function isSortedAndHow(array) {
  if(JSON.stringify([...array].sort((a,b) => a-b)) === JSON.stringify([...array])){
    return "yes, ascending"
  }else if(JSON.stringify([...array].sort((a,b) => b-a)) === JSON.stringify([...array])){
    return "yes, descending"
  }else{
    return "no"
  }
}
