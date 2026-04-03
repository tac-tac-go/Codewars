export function averages(numbers: number[] | null): number[] {
  return numbers
    ? numbers
        .map((number, index, array) => (number + array[index + 1]) / 2)
        .slice(0, -1)
    : []
}
