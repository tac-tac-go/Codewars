const well = (x) => {
  const result = [...x].flat().filter(v => /good/i.test(v)).length
  if(result===1 || result===2){
    return 'Publish!'
  }else if(result>=3){
    return 'I smell a series!'
  }else{
    return 'Fail!'
  }
}
