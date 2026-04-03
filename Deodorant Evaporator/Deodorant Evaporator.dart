int evaporator(double content, double evap_per_day, double threshold){
  var threshold_v = content * (threshold / 100);
  var index = 0;
  while (content >= threshold_v) {
      content *= 1 - (evap_per_day / 100);
      index++;
  }
  return index;
}

