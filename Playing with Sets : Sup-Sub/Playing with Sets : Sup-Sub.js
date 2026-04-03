const isSubsetOf = (s1, s2) => [...s1].every( e => s2.has(e) )
const isSupersetOf = (s1, s2) => isSubsetOf(s2,s1)
