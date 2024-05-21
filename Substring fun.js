function nthChar(words){
  return [...Array(words.length).keys()].map(i => words[i][i]).join("")
}
