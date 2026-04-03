int getSectionId(int n, List<int> a) {
  int start = 0;
  for(int i=0;i<a.length;i++){
    final end = start + a[i];
    if(n >= start && n < end)return i;
    start = end;
  }
  return -1;
}
