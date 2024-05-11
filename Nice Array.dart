bool isNice(List<int> arr) {
  if(arr.length==0)return false;
  return arr.every((e) => arr.contains(e+1) || arr.contains(e-1));
}
