const digitsAverage = (input) => {
  let arr = [...String(input)].map(Number)
  while(arr.length!==1){
    let tmp = [];
    for(let i=0;i<arr.length-1;i++){
       tmp.push(Math.ceil((arr[i]+arr[i+1])/2))
    }
    arr = tmp
  }
  return arr[0]
}
