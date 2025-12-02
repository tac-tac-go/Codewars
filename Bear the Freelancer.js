function bearDollars(arr) {
   const list_d = Object.create(null);
   list_d['close friend'] = 25;
   list_d['friend'] = 50;
   list_d['acquaintance'] = 100;
   return arr.map(([hours, relation]) => (list_d[relation.toLowerCase()] || 125) * hours).reduce((a,b) => a+b,0)
}
