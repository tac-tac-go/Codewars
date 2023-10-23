function toFreud(string) {
  if(string.length==0) return "";
  return string.split(" ").map(v => "sex").join(" ");
}
