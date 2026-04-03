export function wordValue(arr: string[]) {
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  let result = [];
  for(const [index,element1] of arr.entries()){
    let tmp = [];
    for(const element2 of element1){
       if(alpha.indexOf(element2)!=-1){
         tmp.push((alpha.indexOf(element2)+1)*(index+1))
       }
    }
    result.push(tmp.reduce((a,b) => a+b,0))
  }
  return result
}
