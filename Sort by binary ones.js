function sortByBinaryOnes(list){
  let dic = []
  for(let i=0;i<list.length;i++){
    let tmp = {}
    tmp["b_l"] = [...list[i].toString(2)].filter(v => v==='1').length
    tmp['l'] = list[i].toString(2).length
    tmp["o"] = list[i]
    dic.push(tmp)
  }
  dic.sort((a,b) => b.b_l-a.b_l || a.l - b.l || a.o - b.o )
  return dic.map(v => v.o)
}

