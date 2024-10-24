export function jumpingNumber(n: number) {
  const arr = [...String(n)];
  for(let i=0;i<arr.length-1;i++){
    if(Math.abs(parseInt(arr[i+1])-parseInt(arr[i]))!==1){
      return "Not!!"
    }
  }
  return "Jumping!!"
}

