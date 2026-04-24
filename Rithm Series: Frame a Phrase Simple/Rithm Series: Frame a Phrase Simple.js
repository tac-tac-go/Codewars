function frame(phrase, ch = "*") {
  const width = phrase.length + 4;
  const border = ch.repeat(width);
  const paddingRow = `${ch}${" ".repeat(width - 2)}${ch}`;
  if (phrase === "") {
    return `${border}\n${paddingRow}\n${paddingRow}\n${border}`;
  }
  const contentRow = `${ch} ${phrase} ${ch}`;
  return `${border}\n${paddingRow}\n${contentRow}\n${paddingRow}\n${border}`;
}
