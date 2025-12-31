function shiritori(words) {
  if(words.length===0 || words[0]==="")return []
  let result = []
    for(let i=0;i<words.length-1;i++){
      if(words[i].length>=1 && (words[i].slice(words[i].length-1) === words[i+1].slice(0,1))){
        result.push(words[i])
      }else{
        result.push(words[i])
        return result
      }
  }
  result.push(words[words.length-1])
  return result
}
