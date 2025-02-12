const likeOrDislike = (buttons) => {
  let state = "Nothing"
  for(let button of buttons){
    state = state===button ? "Nothing" : button
  }
  return state
}
