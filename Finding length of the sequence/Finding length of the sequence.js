var lengthOfSequence = function (arr, n) {
  const result_index = arr.map((e,index) => e==n ? index : -1).filter(v => v>=0)
  return result_index.length==2 ? result_index[1]-result_index[0]+1  : 0;
};
