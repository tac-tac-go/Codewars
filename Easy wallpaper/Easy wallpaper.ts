export function wallpaper(l: number, w: number, h: number): string {
  const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve","thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"]
  return l!==0 && w!==0 && h!==0 ? numbers[Math.ceil(Math.ceil((((l+w)*2)*h*1.15)/0.52)/10)] : "zero"
}
