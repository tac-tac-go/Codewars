function divisibleByLast(n) {
  const arr = String(n).split("").map(Number)
  let con = [false]
  for(let i=1;i<=arr.length-1;i++){
    if(arr[i]%arr[i-1]===0){
      con.push(true)
    }else{
      con.push(false)
    }
  }
  return con
}
