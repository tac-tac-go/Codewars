const divmod = (x, y) => [Math.floor(x / y), x % y];

function timeCorrect(timestring) {
  if(timestring === ""){
    return ""
  }else if(timestring === null){
    return null
  }else{
    if(timestring.match(/[0-9]{2}:[0-9]{2}:[0-9]{2}/)){
      let [h,m,s] = timestring.split(":")
      const [s1,s2] = divmod(parseInt(s),60)
      const [m1,m2] = divmod(s1+parseInt(m),60)
      const [h1,h2] = divmod(m1+parseInt(h),24)      
      return `${h2.toString().padStart(2, '0')}:${m2.toString().padStart( 2, '0')}:${s2.toString().padStart( 2, '0')}`
    }else{
      return null
    }
  }
}

