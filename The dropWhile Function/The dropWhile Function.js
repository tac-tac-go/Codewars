function dropWhile(array, predicate) {
  let index = 0
  while(index < array.length && predicate(array[index])){
    index += 1
  }
  return array.slice(index,)
}
