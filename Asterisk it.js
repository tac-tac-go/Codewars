function asteriscIt(n) { 
  if(typeof n==='object')n = n.map(String).join("")
  else n = String(n)
  let result = ""
  for(let i=0;i<n.length-1;i++){
    if(Number(n[i+1])%2===0&&Number(n[i])%2===0){
      result+=n[i]+"*"
    }else{
      result+=n[i]
    }
  }
  result+=n[n.length-1]
  return result
};
