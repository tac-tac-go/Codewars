function strCount(str, letter){  
   reg = new RegExp(letter,"ig");
   let result = str.match(reg);
   try {
      return result.length
   }catch(e){
     return 0
   }
}
