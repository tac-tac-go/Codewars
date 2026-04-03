const matrixSquareUp = b => {
  const transpose = a => a[0].map((_,c) => a.map(r => r[c]))
  let arr_t = []
  for(let i=0;i<b;i++){
    arr_t.push(Array(i).fill("x").concat(Array(b-i).fill(String(i+1))))
  }
  return transpose(arr_t.reverse())
}
