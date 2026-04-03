function solve(arr){
    for(let i of arr){
      if(arr.indexOf(-i)!=-1){
        continue
      }else{
        return i
      }
    }
};
