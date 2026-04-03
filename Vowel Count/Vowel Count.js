function getCount(str) {
  return str.match(/[aiueo]/g) ? str.match(/[aiueo]/g).length : 0;
}
