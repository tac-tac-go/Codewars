function knockKnock(str){
  let arr = str.split(" ")
  let result = "!"
  for(let i=1;i<arr.length;i++){
    let flag = false
    for(let tmp of arr[i]){
      if(arr[i-1].includes(tmp)){
        result+=tmp;
        flag = true
        break
      }
    }
    if(!flag)result+="^"
  }
  return result
}
