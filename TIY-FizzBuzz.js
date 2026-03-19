function tiyFizzBuzz(sentence) {
  return [...sentence].map(v => {
    if (/[aiueo]/.test(v)) return "Yard"         
    else if (/[AIUEO]/.test(v)) return "Iron Yard" 
    else if (/[A-Z]/.test(v)) return "Iron"       
    else return v                                  
  }).join("")
}
