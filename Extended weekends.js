function solve(a, b){
  const arr = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
  let result = []
  for(let i=a;i<=b;i++){
    for(let j=0;j<=11;j++){
      if((new Date(i,j,1)).getDay()===5 && new Date(i, j, 31).getDate() === 31){
        result.push(arr[j])
      }
    }
  }
  return [result[0],result[result.length-1],result.length]
}
