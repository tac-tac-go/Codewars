export function amIAfraid(day: string, num: number): boolean {
    if (day === "Monday") {
        return num === 12;
    } else if (day === "Tuesday") {
        return num > 95;
    } else if (day === "Wednesday") {
        return num === 34;
    } else if (day === "Thursday") {
        return num === 0;
    } else if (day === "Friday") {
        return num % 2 === 0;
    } else if (day === "Saturday") {
        return num === 56;
    } else {
        return num === 666 || num === -666;
    }
}
