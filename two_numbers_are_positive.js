function twoArePositive(a, b, c) {
  // Happy Coding
  let array = [a,b,c];
  let result1 = array.filter(v => v>0)
  return result1.length==2 ? true : false;
}