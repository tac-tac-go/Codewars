function solve(str){
   let str_r = [...str.replace(/ /g,"")].reverse()
   for(let i=0;i<str.length;i++){
     if(str[i]==" "){
       str_r.splice(i,0," ")
     }
   }
  return str_r.join("")
}
