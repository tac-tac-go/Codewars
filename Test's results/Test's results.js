function testResult(array) {
  let dic = {'h':0,'a':0,'l':0}
  let ave = 0
  for(let v of array){
    ave += v
    if(v>=9){
      dic['h']+=1
    }else if(v>=7){
      dic['a']+=1
    }else{
      dic['l']+=1
    }
  }
  let result = [((Math.round((ave/array.length)*10**3))/(10**3)),dic]
  if(dic['h']===array.length){
    result.push('They did well')
  }
  return result
}
