export function correct(s: string): string {
  return s.split("").map(x => typeError[x] ? typeError[x] : x).join("")
}

const typeError: {[index:string]:string} = {
    5: 'S',
    0: 'O',
    1: 'I'
}

