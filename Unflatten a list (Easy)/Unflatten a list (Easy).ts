export function unflatten(flatArray: any[]): any[] {
  let index = 0;
  const result: any[] = [];

  while (index < flatArray.length) {
    const current = flatArray[index];
    if (typeof current !== 'number' || current <= 0) {
      break; 
    }
    if (current < 3) {
      result.push(current);
      index += 1;
    } else {
      result.push(flatArray.slice(index, index + current));
      index += current;
    }
  }
  return result;
}
