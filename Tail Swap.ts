export function tailSwap(arr: [string,string]): [string,string] {
  const [str1_a,str1_b] = arr[0].split(":")
  const [str2_a,str2_b] = arr[1].split(":")
  return [`${str1_a}:${str2_b}`,`${str2_a}:${str1_b}`]
}
