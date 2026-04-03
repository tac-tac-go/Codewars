List<int> tableGame(List<List<int>> table) {
  int a= table[0][0];
  int b= table[0][2];
  int c= table[2][0];
  int d= table[2][2];
  if((a+b+c+d == table[1][1])&&(a+b == table[0][1])&&(a+c == table[1][0])&&(b+d == table[1][2])&&(c+d == table[2][1])){
    List<int>output=[a,b,c,d];
    return output;
  }else{
  return [-1];
  }
}
