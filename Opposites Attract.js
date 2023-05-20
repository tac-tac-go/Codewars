function lovefunc(flower1, flower2){
  let odd = [flower1, flower2].filter(v => v%2==1);
  let even = [flower1, flower2].filter(v => v%2==0);
  return odd.length==1 && even.length==1 ? true : false;
}
