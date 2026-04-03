function geometricMeanI(arr){ 
  let vals = arr.filter(v => typeof v==='number' && v >= 0 );
  return vals.length>arr.length*.9 || arr.length-vals.length<2 ?  Math.pow(vals.reduce((p,v)=>p*v,1), 1/vals.length) : 0;
}
