export const longest = (s1:string, s2:string): string => {
  return [...new Set(s1+s2)].sort().join('')
}function longest(s1, s2) {
  return Array.from(new Set(s1.concat(s2))).sort().join("")
}
