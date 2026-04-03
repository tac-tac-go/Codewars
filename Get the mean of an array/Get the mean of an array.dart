int getAverage(List<int> arr) {
  return (arr.reduce((curr, next) => curr + next)/arr.length).toInt();
}
