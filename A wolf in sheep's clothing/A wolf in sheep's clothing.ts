export function warnTheSheep(queue: string[]): string {
  let search_idx = queue.reverse().indexOf("wolf");
  return search_idx==0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${search_idx}! You are about to be eaten by a wolf!`
}
