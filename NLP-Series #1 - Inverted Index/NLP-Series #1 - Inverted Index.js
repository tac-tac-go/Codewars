function buildInvertedIndex(collection, term, caseSensitive, exactMatch) {
  const pattern = exactMatch ? `\\b${term}\\b` : term;
  const flags = caseSensitive ? "" : "i";
  const regex = new RegExp(pattern, flags);
  return collection.map((doc, index) => (regex.test(doc) ? index + 1 : null)).filter(id => id !== null);
}
