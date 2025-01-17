function twosDifference(input){  
 const input_s = [...input].sort((a,b) => a-b);
 let result = []
 for(let i=0;i<input_s.length-1;i++){
   for(let j=i+1;j<input_s.length;j++){
     if(input_s[j]-input_s[i]===2){
       result.push([input_s[i],input_s[j]])
     }
   }
 }
 return result
}
