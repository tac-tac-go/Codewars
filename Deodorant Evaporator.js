function evaporator(content, evap_per_day, threshold){ 
  let threshold_v = content * (threshold / 100);
  let index = 0;
  while (content >= threshold_v) {
      content *= 1 - (evap_per_day / 100);
      index++;
  }
  return index;
}

