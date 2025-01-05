export function toCamelCase(str:string):string{
  const str_s = str.split(/[_-]/) 
  if(str_s.length==0){return ""}
  let s = str_s[0]
  for(let i=1;i<str_s.length;i++){
      s+=str_s[i][0].toUpperCase()+str_s[i].slice(1)
  }
  return s
}
