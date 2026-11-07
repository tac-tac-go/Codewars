export function dropWhile<T>(array: T[], predicate: (e: T) => boolean): T[] {
  let index = 0
  while(index < array.length && predicate(array[index])){
    index += 1
  }
  return array.slice(index,)
}
