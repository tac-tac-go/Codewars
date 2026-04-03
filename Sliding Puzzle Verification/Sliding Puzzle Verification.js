const isSolved = (board) => [].concat(...board).every((v, i, a) => i === 0 || a[i - 1] <= v)
