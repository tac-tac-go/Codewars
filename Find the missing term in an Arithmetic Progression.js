const findMissing = function (list) {  
  const head = Math.min.apply(0,[list.slice(0,1),list.slice(list.length-1,)])
  const last = Math.max.apply(0,[list.slice(0,1),list.slice(list.length-1,)])
  for(let i=head;i<=last;i+=(last-head)/list.length){
    if(list.indexOf(i)===-1)return i
  }
}
