export function validISBN10(isbn: string): boolean {
  if (!/^[0-9]{9}[0-9X]$/.test(isbn)) return false;
  const sum = [...isbn].reduce((acc, ch, i) => {
    const digit = ch === "X" ? 10 : Number(ch);
    return acc + digit * (i + 1);
  }, 0);
  return sum % 11 === 0;
}
