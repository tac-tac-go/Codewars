const formatTime = ms =>
   ((ms/1000)<1)
    ?ms+'ms':((ms/1000)<60)
    ?(ms/1000).fx()+'s':((ms/60000)<60)
    ?(ms/60000).fx()+'m':((ms/3600000)<24)
    ?(ms/3600000).fx()+'h':(ms/86400000).fx()+'d'

Number.prototype.fx = function(){
   return this.toFixed(2)*100/100
}
