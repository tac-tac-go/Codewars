function binaryCleaner(arr) {
  let result = []
  let less_two = arr.filter((v,i) => v < 2)
  let greater_one = arr.forEach((v,i) =>  {
    if(v>1){
      result.push(i)
    }
  })
  return [less_two,result]
}
