var Calculator = {
 average: function(...args) {
   if(args.length!=0)return args.reduce((a,b) => a+b,0)/args.length
   return 0
 }
};
