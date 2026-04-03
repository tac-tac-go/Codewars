function scrabbleScore(str){
  return str.replaceAll(" ","").split("").map(i => $dict[i.toUpperCase()]||0).reduce((a,b) => a+b,0)
}
