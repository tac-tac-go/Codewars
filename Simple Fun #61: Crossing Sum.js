const crossingSum = (matrix, a, b) => matrix.map(v => v[b]).reduce((a,b) => a+b,0)+matrix[a].reduce((a,b) => a+b,0)-matrix[a][b]
