function worries(str){
  let match = ["Making last-minute changes",
               "Sitting in a dark room and shaking",
               "Crying",
               "Laughing hysterically",
               "Not eating"
              ]
  
  if(match.indexOf(str)!=-1){
    return "Stop worrying, everything will be all right!";
  }else{
    return "Do you really care?";
  }
}
