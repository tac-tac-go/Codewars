function sc(array){
  let result = -Infinity
  for(let i=0;i<array.length-1;i++){
    for(let j=i+1;j<array.length;j++){
      let tmp = Math.max.apply(null,cal(array[i],array[j]).concat(cal(array[j],array[i])))
      if(result < tmp)result=tmp
    }
  }
  return result
}

const cal = (v1, v2) => {
  const a = Number(v1);
  const b = Number(v2);
  if (Number.isNaN(a) || Number.isNaN(b)) return [NaN, NaN, NaN, NaN];
  return [a + b, a - b, b === 0 ? 0 : a / b, a * b];
};
