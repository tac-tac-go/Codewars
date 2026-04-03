function howMuchWater(water, load, clothes){
  if(load>clothes)return 'Not enough clothes'
  return load*2>=clothes ? Math.round((water*(1.1**(clothes-load)))*100)/100  : 'Too much clothes'
}
