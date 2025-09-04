const isSubsetOf = (s1, s2) => (new Set([...s1].filter(x => !s2.has(x)))).size===0;
const isSupersetOf = (s1, s2) => (new Set([...s2].filter(x => !s1.has(x)))).size===0;
