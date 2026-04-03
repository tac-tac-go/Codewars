export function movie(card: number, ticket: number, perc: number): number {
  let cnt = 0;
  while (ticket * cnt <= Math.ceil(card)) {
    cnt++;
    card += ticket * perc ** cnt;
  }
  return cnt;
}
