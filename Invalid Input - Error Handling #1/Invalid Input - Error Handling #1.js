const getCount = (words) => {
  let dic = {"vowels":0,"consonants":0}
  if(typeof(words)!=='string'){
    return dic
  }
  words = words.replace(/[^a-z]/ig,"").toLowerCase()
  words.split("").map(v => {
     if(/[aiueo]/.test(v)){
       dic['vowels']+=1
     }else{
       dic['consonants']+=1
     }
  })
  return dic
}
