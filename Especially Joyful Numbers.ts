export const numberJoy = (n: number): boolean => {
    let harshad = String(n).split("").map(v => parseInt(v)).reduce((a,b) => a+b,0)
    const condition1 = n%harshad==0
    const condition2 = parseInt(String(harshad).split("").reverse().join(""))*harshad==n
    return condition1 && condition2
}
