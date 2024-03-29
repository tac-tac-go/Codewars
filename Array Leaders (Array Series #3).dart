List<int> arrayLeaders(List<int> numbers) {
  List<int> leaders = [];
  for (int i = 0; i < numbers.length; i++) {
    if (numbers[i] > numbers.sublist(i + 1).fold(0, (num a, int b) => a + b)) {
      leaders.add(numbers[i]);
    }
  }
  
  return leaders;
}
