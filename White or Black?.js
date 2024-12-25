function mineColor(file, rank) {
  const alpha = "abcdefgh"
  const index=alpha.indexOf(file)+1
  if ((index%2==1 && rank%2==1) || (index%2==0 && rank%2==0))return "black"
  else return "white"
}
