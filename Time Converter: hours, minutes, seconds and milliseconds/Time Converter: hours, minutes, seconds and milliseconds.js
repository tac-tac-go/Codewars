function convert(time) {
  return time.toISOString().split('T')[1].replace('Z', '').replace('.', ',');
}
