interface count_type {
  [key: string]: number
}

export function freqSeq(str: string, sep: string): string {
  let counts:count_type = {};
  for (const num of str.split("")){
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  return str.split("").map(i=>counts[i]).join(`${sep}`)
}
