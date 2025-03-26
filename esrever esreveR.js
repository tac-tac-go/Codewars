function esrever( str ){
  if(str.length===0)return ""
  return [...str].slice(0,str.length-1).reverse().join("")+str.slice(str.length-1,str.length)
}
