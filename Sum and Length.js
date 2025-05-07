function sumLength (arr){
  const posi = arr.filter(v => v>0)
  const nega_c = arr.filter(v => v<0).length
  const zero_c = Math.ceil(arr.filter(v => v===0).length/2)
  return `${posi.reduce((a,b) => a+b,0)} ${nega_c+zero_c}`
}
