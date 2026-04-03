function countVegetables(string){
  const vegetableList = [ "cabbage", "carrot", "celery", "cucumber", "mushroom", "onion", "pepper", "potato", "tofu", "turnip" ];
  let count = {}
  string.split(" ").filter(v => vegetableList.includes(v)).map(v => count[v] = (count[v] || 0)+1)
  const sortedData = Object.entries(count).sort((a,b) => b[1]-a[1] || b[0].localeCompare(a[0]));
  const result = sortedData.map(item => [item[1], item[0]]);
  return result
}
