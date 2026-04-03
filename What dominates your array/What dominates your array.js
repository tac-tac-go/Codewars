function dominator(arr) {
   let count = {}
   arr.map(v => {
     count[v] = (count[v] || 0) + 1
   })
   for(let [key,value] of Object.entries(count)){
     if(value>Math.floor(arr.length/2))return parseInt(key)
   }
   return -1
}

