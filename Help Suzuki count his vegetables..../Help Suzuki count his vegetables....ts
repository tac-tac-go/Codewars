export function countVegetables(s: string): [number, string][] {
  const vegetableList = [
    "cabbage", "carrot", "celery", "cucumber", "mushroom", 
    "onion", "pepper", "potato", "tofu", "turnip"
  ];
  const count: Record<string, number> = {};
  s.split(" ").forEach(v => {
    if (vegetableList.includes(v)) {
      count[v] = (count[v] || 0) + 1;
    }
  });
  const sortedData = Object.entries(count).sort(
    (a, b) => b[1] - a[1] || b[0].localeCompare(a[0])
  );
  return sortedData.map(item => [item[1], item[0]] as [number, string]);
}
