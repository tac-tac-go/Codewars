function pattern(n){
 let tmp1 = []
 for(let i=0;i<n;i++){
   tmp1.push(Array.from({ length: n-i }, (_, i) => String(n-i)).join(""))
 }
 return tmp1.join("\n")
}
