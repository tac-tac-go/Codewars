function greetDevelopers(list) {
  for(let l of list){
    l['greeting']=`Hi ${l.firstName}, what do you like the most about ${l.language}?`
  }
  return list
}
