function convertLojban(lojban) {
  const dic = {"pa":1,"vo":4,"ze":7,"re":2,"mu":5,"bi":8,"no":0,"ci":3,"xa":6,"so":9}
  return parseInt(lojban.split("").map((_,i) => i%2 ===0 ? lojban.substring(i,i+2) : "").filter(v => v!=='').map(v => String(dic[v])).join(""))
}
