function pyramid(stones) {
  const count = {};
  for (const s of stones) count[s] = (count[s] || 0) + 1;
  const can3 = Object.keys(count).filter(v => count[v] >= 3).map(Number);
  const can2 = Object.keys(count).filter(v => count[v] >= 2).map(Number);
  const can1 = Object.keys(count).map(Number);

  let max = null;
  for (const bottom of can3) {
    for (const middle of can2) {
      if (middle === bottom) continue;
      for (const top of can1) {
        if (top === bottom || top === middle) continue;
        const total = bottom * 3 + middle * 2 + top;
        if (max === null || total > max) max = total;
      }
    }
  }

  return max; 
}
