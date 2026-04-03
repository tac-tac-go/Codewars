const sumAverage = (arr) => {
  let ave = arr.map(tmp_a => tmp_a.reduce((a,b) => a+b,0)/tmp_a.length).reduce((a,b) => a+b,0)
  return Math.floor(ave)
}
