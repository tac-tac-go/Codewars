export function validISBN10(isbn: string): boolean {
    if(!/^[0-9]{9}[0-9X]$/.test(isbn)){
      return false
    }
    return [...Array(10).keys()].map(i => i+1).map(v => isbn[v-1]!=='X'? v*Number(isbn[v-1]) : v*10).reduce((a,b) => a+b,0)%11==0
}
