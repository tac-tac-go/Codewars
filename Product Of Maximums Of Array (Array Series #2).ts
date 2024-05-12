export function maxProduct(numbers: number[], size: number): number {
  return [...numbers].sort((a,b) => a-b).reverse().slice(0,size).reduce((a,b) => a*b)
}

