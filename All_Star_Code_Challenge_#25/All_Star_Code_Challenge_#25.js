function currentTime(){
//code here
  let today = new Date();
  let time = today.getHours() + ":" + today.getMinutes()+":"+today.getSeconds();
  return "The current time is "+time
}
