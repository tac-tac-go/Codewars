function validateWord(s){
  let count = {};
  s.toUpperCase().split("").forEach(val => count[val] = (count[val] || 0) + 1);
  return Array.from(new Set(Object.values(count))).length==1;
}
