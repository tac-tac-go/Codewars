function gameWinners(gryffindor, slytherin) {
  const score = s => s[0] + (s[1] === "yes" ? 150 : 0)
  const s1 = score(gryffindor)
  const s2 = score(slytherin)
  return s1 === s2 ? "It's a draw!"
                   : s1 > s2
                   ? "Gryffindor wins!"
                   : "Slytherin wins!"
};
