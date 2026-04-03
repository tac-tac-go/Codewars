String oddOrEven(List<int> array) {
  final odd_or_even = array.fold<int>(0, (curr, next) => curr + next);
  return odd_or_even%2==0 ? "even" : "odd";
}
