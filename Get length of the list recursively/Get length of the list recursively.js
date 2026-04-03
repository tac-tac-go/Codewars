function lenR([head,...tails]) {
  if(head===undefined)return 0
  return lenR(tails)+1
}
