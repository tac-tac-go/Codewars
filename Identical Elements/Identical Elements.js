const duplicateElements = (m, n) =>[...m].filter(v => (new Set(n).has(v))).length>=1
