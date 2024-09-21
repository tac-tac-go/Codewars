function part(x){
  const array = ["Partridge", "PearTree", "Chat", "Dan", "Toblerone", "Lynn", "AlphaPapa", "Nomad"]
  const result = x.filter(v => array.includes(v)).length
  return result > 0 ? `Mine's a Pint`+"!".repeat(result) : "Lynn, I've pierced my foot on a spike!!"
}
