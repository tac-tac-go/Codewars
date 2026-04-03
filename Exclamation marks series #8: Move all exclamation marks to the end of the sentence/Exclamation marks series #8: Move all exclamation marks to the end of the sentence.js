const remove = (string) => {
  return string.replace(/!/g,"")+"!".repeat((string.split("").filter(v => v==='!') || []).length)
}
