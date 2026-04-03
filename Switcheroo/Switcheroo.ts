export function switcheroo(x: string): string {
 return x.split("").map(v => v==="a" ? "b" :v==="b" ? "a" : v).join("")
}
