const table = {'i': '1', 'I': '1', 'o': '0', 'O': '0', 's': '5', 'S': '5'}

const makePassword = (phrase) => {
  return phrase.split(" ").map(v => Object.keys(table).includes(v[0]) ? table[v[0]] : v[0]).join("")
}
