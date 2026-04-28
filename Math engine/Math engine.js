function mathEngine(arr) { return (arr)? arr.filter(x => x >= 0).reduce((a, b) => a * b, 1) + arr.filter(x => x < 0).reduce((a, b) => a + b, 0) : 0; }
