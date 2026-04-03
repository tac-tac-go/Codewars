function arr2bin(arr){
  // show me the code
  let v = arr.filter(v => typeof v =="number").reduce((a,b) => a+b,0)
  return  v.toString(2);
}
