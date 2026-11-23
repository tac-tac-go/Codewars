function strangeCode(s, e) {
  let result = "";                 
  while (s < e - 1) {              
    s++; e--;                      
    result += (result.length % 2 === 0) ? "a" : "b";  
  }
  return result;                   
}