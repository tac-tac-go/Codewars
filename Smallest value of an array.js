function min(arr, toReturn) {
  let min_v = Math.min.apply(null,arr);
  return toReturn=="value" ?  min_v : arr.indexOf(min_v);
}
