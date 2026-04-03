function wordToBin(str){
  return str.split("").map(v => v.charCodeAt(0).toString(2).padStart( 8, '0') )
}

