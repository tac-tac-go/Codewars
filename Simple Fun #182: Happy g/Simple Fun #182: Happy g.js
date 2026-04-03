const gHappy = (str) => str.split(/[^g]/).every(v => v==="" || /g{2,}/.test(v))
