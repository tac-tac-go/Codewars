export function openOrSenior(data:number[][]):string[]{
  return data.map(v => v[0]>=55 && v[1]>7).map(v => v ? 'Senior' : 'Open')
}
