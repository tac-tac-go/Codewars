export function spoonerize(words: string): string {
  const [a1,a2] = words.split(" ")
  return a2.slice(0,1)+a1.slice(1,)+" "+a1.slice(0,1)+a2.slice(1,)
}
