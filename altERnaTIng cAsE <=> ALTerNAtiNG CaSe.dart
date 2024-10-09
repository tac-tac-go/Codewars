String toAlternatingCase(final str) {
  List<String> arr = str.split("");
  String result = '';
  for(int i=0;i<arr.length;i++){
    if(arr[i].toLowerCase()==arr[i]){
      result+=arr[i].toUpperCase();
    }else{
      result+=arr[i].toLowerCase();
    }
  }
  return result;
}
