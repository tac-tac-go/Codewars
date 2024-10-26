int catchSignChange (List<int> arr) {  
  int count = 0;
  for(int i=0;i<arr.length-1;i++){
    if((arr[i]>=0 && arr[i+1]<0) || (arr[i]<0 && arr[i+1]>=0)){
      count+=1;
    }
  }
  return count;
}
