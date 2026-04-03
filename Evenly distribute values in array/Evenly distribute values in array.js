const distributeEvenly = (array) => {
  let count = {}
  array.map(v => count[v]=(count[v] || 0) + 1)
  let result = []
  for(let i=0;i<Object.keys(count).length;i++){
    for(let [key,value] of Object.entries(count)){
       if(count[key]>0){
         count[key]-=1
         result.push(key)
       }
    }
  }
  return result
};
