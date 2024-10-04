class SequenceSum{
  static String showSequence(int n)
  {
    if(n==0){
      return "0=0";
    }else if(n<0){
      return '$n<0';
    }else{
      int tmp = 0;
      List<String> arr = [];
      for(int i=0;i<=n;i++){
        arr.add(i.toString());
        tmp+=i;
      }
      String result = arr.join("+");
      return '$result = $tmp';
    }
  }
}
