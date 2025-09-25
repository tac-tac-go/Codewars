const pattern = n =>
                Array.from({length: n}, (_, i) => Array.from({length: n - i}, (_, j) => n - j).join('')).join('\n');
