function insurance(age, size, numofdays){
  let cost = age < 25 ? 10 : 0;
  if(size=='medium')cost+=10
  else if(size=='economy')cost+=0
  else cost+=15
  cost+=50
  return numofdays<=0 ? 0 : cost*numofdays
}
