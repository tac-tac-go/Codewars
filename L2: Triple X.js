function tripleX(str){
  for(let i=0;i<str.length-2;i++){
    if(str[i]=="x")return str.slice(i,i+3)==="xxx"
  }
  return false
}


