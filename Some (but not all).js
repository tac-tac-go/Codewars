const someButNotAll = (seq, pred) => {
  const arr = [...seq]
  return arr.some(pred) && !arr.every(pred)
}
