function pattern(n) {
  if (n <= 0) return "";
  const lines = [];
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let k = n; k >= n - i + 1; k--) line += String(k);
    lines.push(line);
  }
  return lines.join("\n");
}

