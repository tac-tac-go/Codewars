function correctness(bobsDecisions, expertDecisions) {
  let result = 0
  bobsDecisions.map((v,i) =>  {
      if(bobsDecisions[i]==expertDecisions[i]){
         result+=1
      }else if(bobsDecisions[i]!=expertDecisions[i] && (bobsDecisions[i]=="?" || expertDecisions[i]=="?")){
        result+=0.5
      }else{
        result+=0
      }
  })
  return result
}
