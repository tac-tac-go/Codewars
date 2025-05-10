BigInt soln(int n) {
  String result = "";
  for(int i=0;i<n;i++){
    for(int j=0;j<n;j++){
      if(i==j){
        result+="1";
      }else{
        result+="0";
      }
    }
  }
  return BigInt.parse(result, radix: 2);
}
