import "dart:math";
int add(int num1, int num2){
  int max_length = max(num1.toString().length,num2.toString().length);
  String num1_s = num1.toString().padLeft(max_length, '0');
  String num2_s = num2.toString().padLeft(max_length, '0');
  String result = "";
  for(int i=0;i<num1_s.length;i++){
    result+= ((int.parse(num1_s[i]))+(int.parse(num2_s[i]))).toString();
  }
  return int.parse(result);
}
