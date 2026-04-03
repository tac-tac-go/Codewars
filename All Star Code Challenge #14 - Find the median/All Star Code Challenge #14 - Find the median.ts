export function median(array: number[]):number {
  const arr_s = array.slice().sort((a,b) => a-b)
  if(array.length%2==0){
    return (arr_s[Math.floor(arr_s.length/2)]+arr_s[Math.floor(arr_s.length/2)-1])/2
  }else{
    return arr_s[Math.floor(arr_s.length/2)]
  }
}
