import 'dart:math';
int shiftLeft(String a, String b){
  int minVal = [a.split("").length,b.split("").length].reduce(min);
  List<String> a_r = a.split('').reversed.toList();
  List<String> b_r = b.split('').reversed.toList();
  int common = 0;
  for(int i=0;i<minVal;i++){
    if(a_r[i]==b_r[i]){
      common+=1;
    }else{
      break;
    }
  }
  return (a.length-common)+(b.length-common);
}
