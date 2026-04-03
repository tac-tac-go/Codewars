function minimumPerimeter(area) {
  let min = Infinity;
  for (let i = 1; i * i <= area; i++) {
    if (area % i === 0) {
      const h = i;
      const w = area / i;
      const perimeter = 2 * (h + w);
      if (perimeter < min) {
        min = perimeter;
      }
    }
  }
  return min;
}

