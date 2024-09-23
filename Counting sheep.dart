int countSheep(List<bool?> arr) {
  return arr.where((item) => item==true).length;
}
