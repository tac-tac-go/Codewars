function sectSort(arr, start = 0, length = 0) {
  const end = (length === 0) ? arr.length : start + length;
  const f_a = arr.slice(0, start);
  const arr_s = arr.slice(start, end).sort((a, b) => a - b);
  const l_a = arr.slice(end);
  return f_a.concat(arr_s).concat(l_a);
}
