export function duplicateEncode(word_i: string){
  const word: string = word_i.toLowerCase();
  let count: { [key: string]: number } = {};
  word.split("").forEach(v => count[v] = (count[v] || 0) + 1);
  Object.entries(count).forEach(([key, value]) => {
      count[key] = value === 1 ? 1 : 0; 
  });
  let result: string = "";
  word.split("").forEach(v => result += count[v] === 1 ? "(" : ")");
  return result;
}
