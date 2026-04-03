int stray(List<int> numbers) {
  int result = 0;
  for(int i=0;i<numbers.length;i++){
    if(numbers.lastIndexOf(numbers[i])==numbers.indexOf(numbers[i])){
      result =  numbers[i];
      break;
    }
  }
  return result;
}
