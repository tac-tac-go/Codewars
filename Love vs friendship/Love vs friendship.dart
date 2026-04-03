int wordsToMarks(String s) {
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  return s.split("").map((v) => alpha.indexOf(v)+1).reduce((a,b) => a+b);
}
