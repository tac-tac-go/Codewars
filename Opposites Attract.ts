export function lovefunc(flower1: number, flower2: number): boolean {
    return (flower1%2==1 && flower2%2==0) || (flower1%2==0 && flower2%2==1)
}
