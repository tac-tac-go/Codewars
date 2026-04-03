function countConsonants(str) {
  return new Set(str.replace(/[^a-z]/ig,"").toLowerCase().match(/[^aieuo]/gi)).size
}
