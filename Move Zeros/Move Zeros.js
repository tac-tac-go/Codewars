function move_zeros(arrNum, isRight=true){
  let count_z = Array(arrNum.filter(v => v===0).length).fill(0)
  let arr_nz = arrNum.filter(v => v!==0)
  return isRight ? arr_nz.concat(count_z) : count_z.concat(arr_nz)
}
