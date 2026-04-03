function scf(arr){
  let min = arr.length === 0 ? 1 : Math.min(...arr);
  for(let i=2;i<=min;i++){
    if(arr.every(v => v%i===0))return i
  }
  return 1
}
