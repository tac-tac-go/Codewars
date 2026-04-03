const change_inverd = (s) => s.toUpperCase()===s ? s.toLowerCase() : s.toUpperCase()

function reverseAndMirror(s1,s2) {
  const s1_r = s1.split("").map(change_inverd).reverse().join("")+s1.split("").map(change_inverd).join("");
  const s2_r = s2.split("").map(change_inverd).reverse().join("");
  return s2_r+"@@@"+s1_r
}
