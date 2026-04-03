function skiponacci(n) {
  let res = [];
  if(n>=1) res.push(1);
  if(n>=2) res.push(1);
  for(let i=3;i<=n;i++){
    res.push(res[i-2] + res[i-3]);
  }
  res = res.map(String)
  for(let i=0;i<res.length;i++){
    if((i+1)%2===0){
      res[i]="skip"
    }
  }
  return res.join(" ")
}
