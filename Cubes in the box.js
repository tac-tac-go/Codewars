const f = (x,y,z) => Array.from({length: Math.min(x,y,z)}, (_, i) => (x - i) * (y - i) * (z - i)).reduce((s, v) => s + v, 0);
