export function countPositivesSumNegatives(input: any) {
   if(!input || input.length==0){return []}
   let plus = 0;
   let minus = 0;
   for(let i of input){
     if(i>0){plus++}
     else if(i <0){
       minus+=i
     }
   }
  return [plus,minus]
}
