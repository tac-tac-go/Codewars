const countCombinations = (string, key) => (string.match(new RegExp(`${key}`,'ig')) || []).length
