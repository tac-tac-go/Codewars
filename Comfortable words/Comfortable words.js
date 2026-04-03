const comfortableWord = word => {
  const left = "q, w, e, r, t, a, s, d, f, g, z, x, c, v, b".replaceAll(" ","").split(",")
  const right = "y, u, i, o, p, h, j, k, l, n, m".replaceAll(" ","").split(",")
  for(let i=0;i<word.length-1;i++){
    console.log(left.indexOf(word[i])===-1 , right.indexOf(word[i+1])==-1 , right.indexOf(word[i])===-1 , left.indexOf(word[i+1])==-1)
    if((left.indexOf(word[i])===-1 && left.indexOf(word[i+1])===-1) || (right.indexOf(word[i])===-1 && right.indexOf(word[i+1])===-1)){
      return false
    }
  }
  return true
};
