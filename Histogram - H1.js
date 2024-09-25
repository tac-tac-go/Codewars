function histogram(results) {
  let tmp = [];
  results.map((result,index) => {
    if(result==0){
      tmp.push(`${index+1}|`)
    }else{
      tmp.push(`${index+1}|${"#".repeat(result)} ${result}`)
    }
  })
  tmp = tmp.slice().reverse()
  return tmp.join("\n")+"\n"
}
