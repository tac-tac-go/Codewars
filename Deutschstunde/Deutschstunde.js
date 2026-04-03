function derDieDas(wort){
  if(wort==="")return "das "
  const count_vowel = wort.match(/[aiueoäöü]/ig).length
  if(count_vowel<2)return `das ${wort}`
  else if(count_vowel<4)return `die ${wort}`
  else return `der ${wort}`
}
