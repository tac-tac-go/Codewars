function sentence(arrayOfObjects) {
  let key = []
  for(let item of arrayOfObjects){
    let tmp = {}
    for(let [k,v] of Object.entries(item)){
      tmp['key'] = Number(k)
      tmp['value'] = v
      key.push(tmp)
    }
  }
  key.sort((a,b) => a.key-b.key)
  return key.map(v => v.value).join(" ")
}
