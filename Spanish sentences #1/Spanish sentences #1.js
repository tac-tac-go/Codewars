function spanishSent(arr) {
  const count = arr.filter(s => /^¡.*!$/.test(s) || /^¿.*\?$/.test(s)).length;
  return `¡${count} spanish sentence${count == 1 ? '' : 's'} here and hasta la vista, baby!`;
}
