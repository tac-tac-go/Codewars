export function bump(x: string): string{
  return (x.match(/n/g) || []).length >15 ? "Car Dead" : "Woohoo!";
}
