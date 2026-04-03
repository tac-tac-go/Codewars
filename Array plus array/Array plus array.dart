int arrayPlusArray(List<int> arr1, List<int> arr2) {
  return arr1.fold(0,(total,x) => total + x) + arr2.fold(0,(total,x) => total + x);
}
