function tug_o_war(teams) {
  //Code
  let result1 = teams[0].reduce((a,b) => a+b)
  let result2 = teams[1].reduce((a,b) => a+b)
  if(result1>result2){
    return "Team 1 wins!";
  }else if(result1<result2){
    return "Team 2 wins!";
  }else{
    let max1 = teams[0][0]
    let max2 = teams[1].slice(-1)
    if(max1>max2){
      return "Team 1 wins!";
    }else if(max1<max2){
      return "Team 2 wins!";
    }else{
      return "It's a tie!";
    }
  }
}
