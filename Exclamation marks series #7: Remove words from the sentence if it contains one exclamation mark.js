const remove = (string) => {
  return string.split(" ").filter(v => [...v].filter(vi => vi==='!').length!==1).join(" ")
}
