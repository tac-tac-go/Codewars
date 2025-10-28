function selfDescriptive(num) {
  const count = Object.fromEntries(
  Array.from({ length: String(num).length  }, (_, i) => [String(i), 0])
  );
  String(num).split("").map(v => count[v] = (count[v] || 0) + 1)
  return [...String(num)].every((v,i) => (Number(v)===count[i]))
}
