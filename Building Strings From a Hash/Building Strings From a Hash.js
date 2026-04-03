function solution(pairs){
  let result = []
  for(let [i,j] of Object.entries(pairs)){
    result.push(`${i} = ${j}`)
  }
  return result.join(",")
}
