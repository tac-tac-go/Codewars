export function compose(s1: string, s2: string): string {
  const arr1: string[] = s1.split("\n");
  const arr2: string[] = s2.split("\n");
  const result: string[] = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(
      arr1[i].slice(0, i + 1) + arr2[arr1.length - i - 1].slice(0, arr1.length - i)
    );
  }
  return result.join("\n");
}
