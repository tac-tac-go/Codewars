int maxProduct(arr, size) {
  arr.sort((int b, int a) => a.compareTo(b));
  return arr.sublist(0,size).reduce((int a,int b) => a*b);
}
