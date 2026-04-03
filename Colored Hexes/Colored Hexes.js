function hexColor(codes){
  if(codes==='' || codes==='000 000 000' || codes==='0 0 0')return 'black'
  let arr = codes.split(" ").map(Number)
  let max = Math.max.apply(null,arr)
  if(arr[0]===max){
    if(arr[0]===arr[1] && arr[1]===arr[2])return "white"
    else if(arr[0]===arr[2])return "magenta"
    else if(arr[0]===arr[1])return "yellow"
    else return "red"
  }else if(arr[1]===max){
    if(arr[1]===arr[2])return "cyan"
    else return "green"
  }else{
    return "blue"
  }
}
