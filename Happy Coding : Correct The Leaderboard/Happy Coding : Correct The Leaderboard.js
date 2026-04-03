function correct(leaderBoard){
  let arr = leaderBoard.split("\n").map(v => v.split(/ (.+)/, 2))
  for(let i=0;i<arr.length;i++){
    if(arr[i][1]==='myjinxin2015'){
      arr[i][1] = arr[0][1]
      arr[0][1] = 'myjinxin2015'
    }
  }
  return arr.map(v => v.join(" ")).join("\n")
}
