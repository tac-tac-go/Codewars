function plant(seed, water, fert, temp){
  if(temp>=20 && temp<=30){
    return ("-".repeat(water)+`${seed}`.repeat(fert)).repeat(water)
  }else{
    return ("-".repeat(water)).repeat(water)+`${seed}`
  }
}
