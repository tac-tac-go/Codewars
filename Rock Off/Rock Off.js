function solve(a, b) {
  let a_w = a.filter((_,i) => a[i]>b[i]).length
  let b_w = b.filter((_,i) => a[i]<b[i]).length
  if(a_w>b_w)return `${a_w}, ${b_w}: Alice made "Kurt" proud!`
  else if(a_w<b_w)return `${a_w}, ${b_w}: Bob made "Jeff" proud!`
  else return `${a_w}, ${b_w}: that looks like a "draw"! Rock on!`
}
