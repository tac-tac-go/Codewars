function validateCode (code) {
  return ["1","2","3"].includes(String(code).slice(0,1))
}
