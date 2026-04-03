export function number(busStops: [number, number][]): number {
 return busStops.map(([i,j]) => i-j).reduce((a,b) => a+b)
}
