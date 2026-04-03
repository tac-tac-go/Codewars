function encode(s) {
  let s_left = s.slice(1,)
  let result = ""
  for(let i=0;i<Math.floor(s_left.length/2);i++){
    result+=s_left.slice(s_left.length-i-1,s_left.length-i)+s_left.slice(i,i+1)
  }
  if(s_left.length%2===1){
    result += s_left.slice(Math.floor(s_left.length/2),Math.floor(s_left.length/2)+1)
  }
  result = s.slice(0,1)+result
  return result
}

function decode(s) {
  let even_s = []
  let odd_s = []
  for(let i=0;i<s.length;i++){
    if(i%2===0)even_s.push(s.slice(i,i+1))
    else odd_s.push(s.slice(i,i+1))
  }
  return even_s.join("")+[...odd_s].reverse().join("")
}
