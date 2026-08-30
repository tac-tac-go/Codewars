export function nameFile(fmt: string, nbr: number, start: number): string[] {
  let result: string[] = [];
  if (nbr <= 0 || nbr % 1 !== 0 || start % 1 !== 0) return [];
  for (let i = start; i < start + nbr; i++) {
    result.push(fmt.replace(/<index_no>/g, String(i)));
  }
  return result;
}
