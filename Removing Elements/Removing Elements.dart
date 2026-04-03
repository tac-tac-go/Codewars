List<dynamic> removeEveryOther(List<dynamic> myList){
  List<dynamic> list = [];
  for(int i=0;i<myList.length;i++){
    if(i%2==0){
      list.add(myList[i]);
    }
  }
  return list;
}
