export function removeDuplicateWords(s: string): string {
  interface word_type {
    [key: string]: number
  }
  
  const obj:word_type = {};
  for(let i of s.split(" ")){
    if(obj[i]){
      obj[i]+=1
    }else{
      obj[i]=1
    }
  }
  return Object.keys(obj).join(" ")
}
