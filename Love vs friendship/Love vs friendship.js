function wordsToMarks(string){
  return string.split("").map(v => v.charCodeAt(0) - "a".charCodeAt(0)+1).reduce((a,b) => a+b)
}
