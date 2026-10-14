export const decrypt = (str: string): string => {
  const decoded = str.replace(/'(\d+)'/g, (_, code) => {
    return String.fromCharCode(Number(code));
  });
  return decoded.split("").reverse().join("");
}
