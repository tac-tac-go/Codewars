function chooseShows(showList) {
  if(showList.length===0)return [['No shows to see!'], 0]
  showList.sort((a,b) => a.time-b.time || a.price-b.price)
  let now_time = showList[0].time+showList[0].length+0.5
  let result = [showList[0].name,]
  let price = showList[0].price
  showList = showList.slice(1,)
  for(let tmp of showList){
    if(now_time <= tmp.time) {
       now_time = tmp.time + tmp.length + 0.5;
       price+=tmp.price
       result.push(tmp.name)
    }
  }
  return [result,price] 
}
