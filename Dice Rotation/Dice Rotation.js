function rotations(dieArray){
  let store = []
  for(let i=1;i<=6;i++){
    let result = 0
    for(let tmp of dieArray){
      if(tmp===i)continue
      else if(tmp+i===7)result+=2
      else result+=1
    }
    store.push(result)
  }
  return Math.min(...store)
}
