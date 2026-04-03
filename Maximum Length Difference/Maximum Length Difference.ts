export const mxdiflg = (a1:string[], a2:string[]): number => {
    let max_result = -1;
    for(let i of a1){
      for(let j of a2){
        if(max_result<Math.abs(i.length-j.length)){
          max_result=Math.abs(i.length-j.length)
        }
      }
    }
   return max_result
}


