import "dart:core";

int getCount(String inputStr){
  return inputStr.split('').fold(0,(a,b) => a+="aeiou".contains(b) ? 1:0);
}
