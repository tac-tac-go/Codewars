interface billValue {
  [key: string]: any
}


export function splitTheBill(x: {[k: string]: number}): {[k: string]: number} {
   let ave = Object.values(x).reduce((a,b) => a+b,0)/Object.keys(x).length
   let result:billValue = {};
   for(let [key,value] of Object.entries(x)){
     result[key]=Math.round((x[key]-ave)*100)/100
   }
   return result
}
