export function findMissingLetter(array: string[]): string {
  for (let i = 1; i < array.length; i++) {
    const prev = array[i - 1].charCodeAt(0);
    if (array[i].charCodeAt(0) - prev !== 1) {
      return String.fromCharCode(prev + 1);
    }
  }
  return "";
}
