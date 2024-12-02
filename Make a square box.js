function box(n){
  const repeat = (arr, n) => [].concat(...Array(n).fill(arr));
  const arr2 = repeat(["-"+" ".repeat(n-2)+"-"],n-2)
  const arr1 = ['-'.repeat(n)]
  return arr1.concat(arr2).concat(arr1)
}
