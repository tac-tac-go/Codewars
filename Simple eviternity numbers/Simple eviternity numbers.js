function solve(a,b){
    let result = 0
    for(let i=a;i<=b;i++){
       let tmp = String(i);
       if(tmp.replace(/[358]/g,"")===''){
         if((tmp.match(/[8]/g) || []).length >= (tmp.match(/[5]/g) || []).length && (tmp.match(/[5]/g) || []).length >= (tmp.match(/[3]/g) || []).length){
           result+=1
         }
       }
    }
    return result
}
