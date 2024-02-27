function addLetters(...letters) {
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  return alpha[((letters.map(i => alpha.indexOf(i)+1).reduce((a,b) => a+b,26)-1)%26)]
}
