function checkLogs(log) {
  if(log.length===0)return 0
  let count  = 1;
  for(let i=0;i<log.length-1;i++){
     const date1 = new Date(`1/1/2020 ${log[i]}`)
     const date2 = new Date(`1/1/2020 ${log[i+1]}`)
     if(date1>=date2)count+=1
  }
  return count
}
