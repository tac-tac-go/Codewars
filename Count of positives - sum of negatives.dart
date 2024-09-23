List<int> countPositivesSumNegatives(List<int>? input) {
  if (input == null || input.isEmpty) {
    return [];
  } else {
    List<int> total = [];
    
    int positivos = input.where((num) => num > 0).length;
    total.add(positivos);
    
    int sumNegativo = input.where((num) => num < 0).isNotEmpty ? input.where((num) => num < 0).reduce((a, b) => a + b) : 0;
    total.add(sumNegativo);
    
    return total;
  }
}
