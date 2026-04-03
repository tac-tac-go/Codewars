function daysRepresented(trips){
  const arr = new Array(Math.max.apply(null,[...trips].flat())).fill(0)
  for(let tmp of trips){
    for(let i=tmp[0];i<=tmp[1];i++){
      arr[i]=1
    }
  }
  return arr.filter(v => v===1).length
}
