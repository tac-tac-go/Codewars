function commonGround(s1, s2){
  let arr_s1 = s1.split(" ")
  let arr_s2 = s2.split(" ")
  let result = []
  for(let tmp of arr_s2){
    if(arr_s1.includes(tmp)){
      result.push(tmp)
    }
  }
  return result.length===0 ? 'death' : result.join(" ")
}
