List<Object?> every(List<Object?> array, [int interval=1, int startIndex=0]) {
  List<Object?> result = [];
  for(int i=startIndex;i<array.length;i+=interval){
    result.add(array.sublist(i,i+1)[0]);
  }
  return result;
}
