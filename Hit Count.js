function counterEffect(hitCount) {
 let arr = []
 for(let i=0;i<hitCount.length;i++){
   let tmp = []
   for(let j=0;j<=hitCount.slice(i,i+1);j++){
     tmp.push(j)
   }
   arr.push(tmp)
 }
 return arr
}
