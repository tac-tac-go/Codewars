function deleteValues(array, pred) {
  for(let i = 0; i < array.length; i++) {
    if ( pred(array[i]) ) {
      array.splice(i--, 1);
    }
  }
  return array;
}

