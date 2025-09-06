function pattern(n){
 let result = []
 for(let i=0;i<n;i++){
   let arr = Array.from({length:n-i},(_,i) => n-i)
   arr.sort((a,b) => a-b)
   arr = arr.map(String).join("")
   result.push(arr)
 }
 return result.join("\n")
}
