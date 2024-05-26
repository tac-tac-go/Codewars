function pattern(n){
  let result = [];
  for(let i=0;i<n;i++){
    if(i==0){
      result.push("1")
    }else{
      result.push("1"+"*".repeat(i)+String(i+1))
    }
  }
  return result.join("\n")
}
