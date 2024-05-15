function absentVowel(x){
  const strings = ['a','e','i','o','u']
  for(let i of strings){
    if(x.indexOf(i)==-1){
      return strings.indexOf(i)
    }
  }
}
