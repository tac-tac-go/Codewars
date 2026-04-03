function pattern(n){
  let output=[];
  if(n<=0)return ""
  for(let i=1;i<=n;i+=2){
    output.push(`${i}`.repeat(i))
  }
  return output.join("\n")
}
