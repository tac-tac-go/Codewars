function checkVowel(string, position) {
  return position>=string.length || position<0 ?  false : /[aiueo]/i.test(string[position])
};
