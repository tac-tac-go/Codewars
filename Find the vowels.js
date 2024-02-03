function vowelIndices(word){
  return word.split("").map((e,i) => e.match(/[aiueoy]/ig) ? i+1 : -1).filter(v => v>0)
}
