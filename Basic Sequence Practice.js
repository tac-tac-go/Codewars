const sumOfN = (n) => Array.from({ length: Math.abs(n) + 1 }, (_, i) => (Math.sign(n) || 1) * (i * (i + 1)) / 2);
