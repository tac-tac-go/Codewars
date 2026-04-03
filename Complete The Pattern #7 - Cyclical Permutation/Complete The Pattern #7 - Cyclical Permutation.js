function pattern(n){
  if(n<=0)return ""
  let tmp = []
  const arr = Array.from({length:n},(_,i) => String(i+1))
  for(let i=0;i<=arr.length-1;i++){
    tmp.push(arr.slice(i,arr.length).concat(...[arr.slice(0,i)]).join(""))
  }
  return tmp.join("\n")
}
