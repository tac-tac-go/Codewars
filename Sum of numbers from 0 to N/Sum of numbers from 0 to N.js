const SequenceSum = (function() {
  function SequenceSum() {}
  SequenceSum.showSequence = function(n) {
    if(n<0){
      return `${n}<0`
    }else if(n==0){
      return `0=0`
    }else{
      let result = []
      let tmp = 0;
      for(let i=0;i<=n;i++){
        result.push(String(i))
        tmp+=i
      }
      return result.join("+") + " =" +` ${tmp}`
    }
  };
  return SequenceSum;
})();
