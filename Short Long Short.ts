export function shortLongShort(a:string, b:string) {
  if(a.length > b.length){
    return b+a+b
  }else {
    return a+b+a
  }
}
