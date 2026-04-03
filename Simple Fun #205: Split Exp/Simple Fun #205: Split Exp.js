function splitExp(n) {
  const [p1, p2] = n.split(".");
  const intPart = [...p1]
    .map((v, i) => v + "0".repeat(p1.length - 1 - i))
    .filter(v => !v.startsWith("0")); 
  const decPart = p2
    ? [...p2]
        .map((v, i) => "." + "0".repeat(i) + v)
        .filter(v => !v.endsWith("0")) 
    : []; 
  return [...intPart, ...decPart];
}
