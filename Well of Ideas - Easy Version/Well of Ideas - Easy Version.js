function well(x){
  let condition = x.filter(v => v=='good').length
  return condition>2 ? "I smell a series!" : condition==1 || condition==2 ? 'Publish!' : 'Fail!'
}
