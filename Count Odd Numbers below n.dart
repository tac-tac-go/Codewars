int oddCount(n) {
  var count=0;
  for (var i = 1;i< n;i++){
    if(i%2==1){
      count+=1;
    }
  }
  return count;
}

