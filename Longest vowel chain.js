function solve(s){
 return Math.max.apply(null,s.match(/[aiueo]+/g).map(i => i.length))
}
