const explode = (x) => {
  const a = typeof x[0]==='number' ? x[0] : null
  const b = typeof x[1]==='number' ? x[1] : null
  return a===null && b==null ? 'Void!' : Array.from({length: a+b},(_,i) => x)
}
