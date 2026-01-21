const alpha = "abcdefghijklmnopqrstuvwxyz"
function closedBracketWord(word) {
  if(word.length%2!==0 || word.length===0)return false
  for(let i=0;i<word.length/2;i++){
    if(alpha.indexOf(word[i])+alpha.indexOf(word[word.length-1-i])!==25)return false
  }
  return true
}
