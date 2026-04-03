function onesComplement(n) {
  return n.split("").map(v => v==="0" ? "1": "0").join("")
};
