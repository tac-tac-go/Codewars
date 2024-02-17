const orderedCount = function (text) {
  return Array.from(new Set(text)).map(c => [c, text.match(new RegExp(c, 'g')).length]);
}
