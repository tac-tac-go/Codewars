function weatherInfo (temp) {
  let convert_temp =  (temp-32) * (5/9)
  if(convert_temp>0){
    return `${convert_temp} is above freezing temperature`
  }else{
    return `${convert_temp} is freezing temperature`
  }
}

