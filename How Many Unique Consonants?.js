function countConsonants(str) {
  return Array.from(new Set(str.replace(/[^a-z]/ig,"").toLowerCase().match(/[^aieuo]/gi))).length
}
