function buildRowText(index, character) {
  const columns = Array(9).fill(" ");
  columns[index] = character;
  return `|${columns.join("|")}|`;
}
