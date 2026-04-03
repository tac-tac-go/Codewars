function mutateMyStrings(stringOne, stringTwo){
  let result = [stringOne]
  let now = stringOne.split("")
  for(let i=0;i<stringOne.length;i++){
    if(stringOne.slice(i,i+1)!==stringTwo.slice(i,i+1)){
      now[i] = stringTwo.slice(i,i+1)
      result.push(now.join(""))
    }
  }
  return result.join("\n")+"\n"
}
