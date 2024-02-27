def add_letters(*letters):
    letters_c = list(letters)+["z"]
    alpha = "zabcdefghijklmnopqrstuvwxy";
    return alpha[(sum([alpha.index(i) for i in letters_c])%26)]function addLetters(...letters) {
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  return alpha[((letters.map(i => alpha.indexOf(i)+1).reduce((a,b) => a+b,26)-1)%26)]
}
