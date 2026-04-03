function highestRank(arr){
  let getNum = num => arr.filter(n => n === num).length;
  return arr.sort((a,b) => getNum(b) - getNum(a) || b - a)[0];
}
