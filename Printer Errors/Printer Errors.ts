export function printerError(s: string): string {
  const errorCount = (s.match(/[n-z]/g) || []).length;
  return `${errorCount}/${s.length}`;
}
