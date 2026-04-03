List<List<int>> matrix(List<List<int>> arr) {
  for(int i=0;i<arr.length;i++){
    arr[i][i] = arr[i][i] < 0 ? 0 : 1;
  }
  return arr;
}
