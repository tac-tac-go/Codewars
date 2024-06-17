function freqSeq(str, sep) {
  let counts = {};
  for (const num of str.split("")){
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  return str.split("").map(i=>counts[i]).join(`${sep}`)
}

