int save(List<int> sizes, int hd) {
  int count = 0;
  int sum_v = 0;
  for (int i = 0; i < sizes.length; i++) {
    if (sum_v + sizes[count] <= hd) {
      sum_v += sizes[count];
      count++;
    } else {
      break;
    }
  }
  return count;
}
