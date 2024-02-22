function repeats(arr){
  let counter1 = {}
  for(let i=0; i < arr.length; i++){
     let num = arr[i]
     counter1[num] = (counter1[num] || 0) + 1
  }
  return Object.entries(counter1).filter(([key,value]) => value==1).map(([i,j]) => Number(i)).reduce((a,b) => a+b,0)
};
