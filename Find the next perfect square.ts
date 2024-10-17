export function findNextSquare(sq:number):number {
  return (sq**0.5)%1==0 ? (sq**0.5+1)**2 : -1;
}
