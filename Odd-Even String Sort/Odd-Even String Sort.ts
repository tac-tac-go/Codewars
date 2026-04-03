export function sortMyString(S:string):string {
    let odd_s = S.split("").filter((v,i) => i%2==1)
    let even_s = S.split("").filter((v,i) => i%2==0)
    return `${even_s.join("")} ${odd_s.join("")}`
}
