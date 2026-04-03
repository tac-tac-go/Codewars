function solve(s){
   return s.split("").filter(v => v==v.toUpperCase()).length > Math.ceil(s.length/2) ? s.toUpperCase() : s.toLowerCase();
}
