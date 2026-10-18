export function sortMyString(S: string): string {
  const even: string[] = [];
  const odd: string[] = [];
  for (let i = 0; i < S.length; i++) {
    (i % 2 === 0 ? even : odd).push(S[i]);
  }
  return `${even.join("")} ${odd.join("")}`;
}
