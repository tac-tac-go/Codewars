function insertDash(num) {
  let num_s = String(num);
  let result = ""
  for(let i=0;i<num_s.length-1;i++){
    if(parseInt(num_s[i])%2==1 && parseInt(num_s[i+1])%2==1){
      result += num_s[i]+"-";
    }else{
      result += num_s[i]
    }
  }
  result += num_s.slice(-1)
  return result;
}

