function pointsPer48(ppg, mpg) {
  return Math.round((ppg*(48/mpg))*10)/10 || 0
}
