function fiveLine(s){
  return Array(5).fill(0).map((v,i) => s.trim().repeat((i+1))).join("\n")  
}
