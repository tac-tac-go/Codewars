const whosOnline = (friends) => {
  let dic = {}
  let online = [];
  let offline = []
  let away = []
  for(let tmp_d of friends){
    if(tmp_d['status']=='offline'){
      offline.push(tmp_d['username'])
    }else{
      if(tmp_d['lastActivity']>10){
        away.push(tmp_d['username'])
      }else{
        online.push(tmp_d['username'])
      }
    }
  }
  if(online.length>0){
    dic['online'] = online
  }
  if(offline.length>0){
    dic['offline'] = offline
  }
  if(away.length>0){
    dic['away'] = away
  }
  return dic
}
