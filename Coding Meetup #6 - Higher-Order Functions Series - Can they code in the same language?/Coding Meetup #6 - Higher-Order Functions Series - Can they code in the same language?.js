function isSameLanguage(list) {
  return Array.from(new Set(list.map(l => l['language']))).length===1
}
