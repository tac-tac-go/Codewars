let result = [];
function expandedForm(num) {
  return String(num).split("").map((v,i) => v==="0" ? "" : String(v)+"0".repeat(String(num).slice(i+1,).length)).filter(v => v).join(" + ")
}
