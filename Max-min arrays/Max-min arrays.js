function solve(arr){
    const rev_arr = [...arr].sort((a,b) => a-b)
    let result = [];
    for(let i=0;i<Math.floor(arr.length/2);i++){
      result.push(rev_arr[arr.length-1-i])
      result.push(rev_arr[i])
    }
    if(arr.length%2!=0)result.push(rev_arr[Math.floor(arr.length/2)])
    return result
};
