function solve(s,k) {
    const arr = s.split(" ")
    let count = 0;
    for(let i=0;i<arr.length;i++){
      for(let j=0;j<arr.length;j++){
        if(i!==j){
          if(Number(arr[i]+arr[j])%k===0)count+=1
        }
      }
    }
    return count
}
