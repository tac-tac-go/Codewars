const babySharkLyrics=()=>{
  const a=['Baby shark','Mommy shark','Daddy shark','Grandma shark','Grandpa shark',`Let's go hunt`]
  result=""
  for(let i=0;i<6;i++){
    result+=(`${a[i]}, doo doo doo doo doo doo`+"\n").repeat(3)+a[i]+"!"+"\n"
  }
  result+="Run away,…"
  return result
}
