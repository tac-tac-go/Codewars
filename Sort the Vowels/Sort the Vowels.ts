export function sortVowels(s?: number | string | null): string {
  return typeof(s)==='string' ? s.split("").map(v => /[aiueo]/i.test(v) ? "|"+v : v + "|").join("\n") : ""
};
