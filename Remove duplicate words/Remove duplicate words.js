function removeDuplicateWords (s) {
  const obj = {};
  for(let i of s.split(" ")){
    if(obj[i]){
      obj[i]+=1
    }else{
      obj[i]=1
    }
  }
  return Object.keys(obj).join(" ")
}
