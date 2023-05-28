export function toAlternatingCase(s: string): string {
  let result = s.split("").map(si => (
    si.toLowerCase()==si ? si.toUpperCase() :
    ((si.toUpperCase()==si) ? si.toLowerCase() : si)
  ))
  return result.join("")
}
