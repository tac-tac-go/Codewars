function factorial(num) {
 if (num < 2) return 1;
 return num * factorial(num - 1);
}

function strong(n) {
  return String(n).split("").map(i => factorial(Number(i))).reduce((a,b) => a+b,0)===n ? "STRONG!!!!" : "Not Strong !!";
}
