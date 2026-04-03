export function filter_list(l:Array<any>):Array<number> {
  return l.filter(v => typeof v === 'number')
}
