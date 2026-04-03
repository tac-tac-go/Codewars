function sc(words){
  const arr = words.split(" ")
  let occ = []
  let count = 0
  for(let v of arr){
     v = v.replace(/[^a-z]/ig,"").toLowerCase()
     if(occ.indexOf(v)===-1){
       occ.push(v)
       count+=v.length
     }else{
       count+=1
     }
  }
  return count
}
