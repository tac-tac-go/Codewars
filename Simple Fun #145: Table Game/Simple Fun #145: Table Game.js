function tableGame(table) {
  const [c1,c2,c3,c4] = [table[0][0],table[0][table.length-1],table[table.length-1][0],table[table.length-1][table.length-1]]
  if(table[0][1]===c1+c2 && table[table.length-1][1]===c3+c4 && table[1][1]===c1+c2+c3+c4){
    return [c1,c2,c3,c4]
  }else{
    return [-1]
  }
}
