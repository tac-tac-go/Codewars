export function stalinSort(array: number[]): void {
  if (array.length === 0) return;
  let writeIndex = 1;
  for (let i = 1; i < array.length; i++) {
    if (array[i] >= array[writeIndex - 1]) {
      array[writeIndex] = array[i];
      writeIndex++;
    }
  }
  array.length = writeIndex;
}
