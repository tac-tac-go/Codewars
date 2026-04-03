export function squareSum(numbers: number[]): number {
    return numbers.map(v => v**2).reduce((a,b) => a+b,0);
}
