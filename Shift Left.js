function shiftLeft(s, t){
  let common = 0;
  while(common < s.length && common < t.length && (s[s.length-1-common] === t[t.length-1-common])){
    common++;
  }
  return s.length-common + t.length-common
}
