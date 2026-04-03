function playerManager(players) {
  if(players==="" || players==null)return []
  const arr = players.split(",").map(s => s.trim())
  let result = []
  for(let i=0;i<arr.length;i+=2){
    let [player,contact] = arr.slice(i,i+2)
    player = player.trim()
    contact = parseInt(contact.trim())
    result.push({player,contact})
  }
  return result
}
