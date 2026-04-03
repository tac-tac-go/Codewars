export function disariumNumber(n: number) {
 return String(n).split("").map((i,j) => Number(i)**(j+1)).reduce((a,b) => a+b)==n ? "Disarium !!" : "Not !!";
}

