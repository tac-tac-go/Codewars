function separateTypes(arr) {
  return arr.reduce((out,v) => {
    const t = typeof v;
    if(!out[t])out[t] = []
    out[t].push(v)
    return out
  },{})
}
