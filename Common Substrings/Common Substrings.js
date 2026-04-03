function SubstringTest(str1, str2){
  str1 = str1.toLowerCase()
  str2 = str2.toLowerCase()
  for(let i=0;i<str1.length-1;i++){
    if(str2.indexOf(str1.slice(i,i+2))!==-1)return true
  }
  return false
}
