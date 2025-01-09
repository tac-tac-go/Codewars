export const high = (text: string): string => {
  const result = text.split(" ").map(word => word.split("").map(s => s.charCodeAt(0)-96).reduce((a,b) => a+b,0))
  const result_hi = result.indexOf(Math.max.apply(null,result))
  return text.split(" ")[result_hi]
}
