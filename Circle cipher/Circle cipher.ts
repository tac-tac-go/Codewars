export function encode(s: string): string {
  if (s.length === 0) return s;
  const s_left = s.slice(1);
  let result = "";
  for (let i = 0; i < Math.floor(s_left.length / 2); i++) {
    result += s_left.slice(s_left.length - i - 1, s_left.length - i) + s_left.slice(i, i + 1);
  }
  if (s_left.length % 2 === 1) {
    result += s_left.slice(Math.floor(s_left.length / 2), Math.floor(s_left.length / 2) + 1);
  }
  return s.slice(0, 1) + result;
}

export function decode(s: string): string {
  if (s.length === 0) return s;
  const firstChar = s.slice(0, 1);
  const encodedPart = s.slice(1);
  const n = encodedPart.length;
  let s_left = new Array(n);
  let left = 0;
  let right = n - 1;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    s_left[n - i - 1] = encodedPart[2 * i];
    s_left[i] = encodedPart[2 * i + 1];
  }
  if (n % 2 === 1) {
    s_left[Math.floor(n / 2)] = encodedPart[n - 1];
  }
  return firstChar + s_left.join("");
}
