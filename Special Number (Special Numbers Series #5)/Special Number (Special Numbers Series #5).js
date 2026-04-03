function specialNumber(n){
  return String(n).split("").every(v => [1,2,3,4,5,0].includes(Number(v))) ? 'Special!!' : 'NOT!!';
}
