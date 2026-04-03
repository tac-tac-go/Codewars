List<num> multiples(int m, num n) {
  List<num> result = [];
  for(int i=1;i<=m;i++){
    result.add(n*i);
  }
  return result;
}
