var evalLikes = function(words){
  let word_len = words.length
  let count=0
  for(let i=0;i<words.length;i++){
    if(words[i].toLowerCase()=="like"){
      count+=1
    }
  }
  return (count/word_len)>=0.05 ? true : false;
}
