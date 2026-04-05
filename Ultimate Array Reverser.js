const ultimateReverse = arr => {
  const arr_r = [...arr.join("")].reverse().join("")
  let current = 0
  let result = []
  for(let tmp of arr){
    let len = tmp.length;
    const piece = arr_r.substring(current,current+len)
    result.push(piece)
    current+=len
  }
  return result
};
