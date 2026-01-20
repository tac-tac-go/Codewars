const scoreTest = (arr, right, omit, wrong) => arr.map(v => [right,omit,-wrong][v]).reduce((a,b) => a+b,0)
