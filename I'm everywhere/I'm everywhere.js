function i(word) {
  const vowel_c = (word.match(/[aiueo]/gi)|| []).length;
  if(word!=='' && word[0]!=="I" && vowel_c < word.length-vowel_c && word[0].toUpperCase()===word[0]){
    return "i"+word[0].toUpperCase()+word.slice(1,);
  }
  return "Invalid word"
}
