function change(name,items,payment){
  let change = payment - items.reduce((a,b) => a+b,0)
  return name==='John' ? change < 0 ? 0 : Math.round(((change%1)*2 + Math.floor(change))*100)/100 : Math.round(change*100)/100
}
