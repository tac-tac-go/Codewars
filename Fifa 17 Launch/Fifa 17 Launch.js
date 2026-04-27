function fifa(ticket, results){
    let result = 0
    for(let i=0;i<results.length;i++){
      const [a,b] = results[i].split("-").map(Number)
      const tmp = Object.entries(ticket)
      if(a>b && tmp[i][0]==="Home"){
        result += Number(tmp[i][1].replace(/[^0-9]/g,""))
      }else if(a<b && tmp[i][0]==="Away"){
        result += Number(tmp[i][1].replace(/[^0-9]/g,""))
      }else if(a===b && tmp[i][0]==="Draw"){
        result += Number(tmp[i][1].replace(/[^0-9]/g,""))
      }
    }
    return `£${result}`
}
