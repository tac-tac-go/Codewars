function arrayConversion(arr) {
  let iteration = 1;
  while(arr.length > 1){
    const next = []
    for(let i=0;i<arr.length;i+=2){
      if(iteration%2!==0){
        next.push(arr[i]+arr[i+1])
      }else{
        next.push(arr[i]*arr[i+1])
      }
    }
    arr = next
    iteration++;
  }
  return arr[0]
}
