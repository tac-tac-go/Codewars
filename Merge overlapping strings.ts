export const mergeStrings = (first: string, second: string): string => {
  return (first + ' ' + second).replace(/(.*) \1/, '$1');
}
