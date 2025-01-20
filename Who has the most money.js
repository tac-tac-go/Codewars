const mostMoney = (students) => {
  let save = []
  let max_v = 0
  for(let s of students){
    let tmp = s.fives*5 + s.tens*10 + s.twenties*20
    save.push([s.name,tmp])
    if(max_v < tmp){
      max_v = tmp
    }
  }
  let result = []
  for(let [n,v] of save){
    if(v===max_v){
      result.push(n)
    }
  }
  return result.length > 1 ? 'all' : result[0]
}
