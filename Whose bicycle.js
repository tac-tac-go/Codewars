function whoseBicycle(diary1, diary2, diary3) {
  const sum = (diary) => Object.values(diary).reduce((a,b) => a+b,0)
  const result = [sum(diary1),sum(diary2),sum(diary3)]
  const max_result = Math.max.apply(null,result)
  if(result[2]==max_result){
    return 'I need to buy a bicycle for my third son.'
  }else if(result[1]==max_result){
    return 'I need to buy a bicycle for my second son.'
  }else{
    return 'I need to buy a bicycle for my first son.'
  }
}
