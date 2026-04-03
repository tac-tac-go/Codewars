export function xo(str: string) : boolean {
  return (str.match(/x/ig) || []).length == (str.match(/o/ig) || []).length;
}
