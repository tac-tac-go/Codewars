function passTheDoorMan (word){
  const word_a = word+" "
  const word_l = word_a.split("")
  const double_w = word.split("").filter((_,i) => word_l[i]===word_l[i+1])[0]
  return (double_w.charCodeAt(0)-96)*3
}
