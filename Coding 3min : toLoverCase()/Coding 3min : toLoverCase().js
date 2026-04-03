const alpha = "abcdefghijklmnopqrstuvwxyz"
String.prototype.toLoverCase=function(){return this.split("").map(v => alpha.indexOf(v.toLowerCase())!==-1 ? "LOVE"[alpha.indexOf(v.toLowerCase())%4] : v).join("")}
