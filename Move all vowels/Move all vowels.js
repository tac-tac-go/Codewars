function moveVowel(input) {
  return input.replace(/[aiueo]/g,"")+input.replace(/[^aiueo]/g,"")
}
