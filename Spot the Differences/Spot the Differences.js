function spot(s1,s2){
  return s1.split("").map((v,i) => s1[i]!==s2[i] ? i : -1).filter(v => v>=0)
}
