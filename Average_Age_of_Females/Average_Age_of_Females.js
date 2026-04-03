function averageFemale(list){
  //code here
  count=[]
  list.map( (v) => {
    if(v['gender']=="female"){
      count.push(v['age'])
    }
  })
  return count.length==0 ? 0 :   count.reduce((a,b)=>a+b)/count.length
}
