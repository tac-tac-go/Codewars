int min(List<int> list) {
  return list.reduce((curr, next) => curr < next? curr: next);
}

int max(List<int> list) {
 return list.reduce((curr, next) => curr > next? curr: next);
}
