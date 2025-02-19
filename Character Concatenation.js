const charConcat = (string) => {
  let str = string.split("")
  if(str.length%2==1){
    str.splice(Math.floor(str.length/2),1)
  }
  let result = ""
  for(let i=0;i<str.length/2;i++){
    result+=str[i]+str[str.length-1-i]+String(i+1)
  }
  return result
}
