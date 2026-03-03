const sum = (s) =>  [...s].reduce((a,b) => Number(a)+Number(b),0)
function isLucky(ticket) {
  if(ticket.length!==6)return false
  const [f,l] = ticket.match(/.{1,3}/g)
  return sum(f)===sum(l)
}
