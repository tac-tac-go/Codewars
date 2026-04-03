String balancedNum(int number) {
  String num = number.toString();
  print(number);
  if (num.length <= 2) {
    return "Balanced";
  } else {
    if (num.length % 2 == 1) {
      int leftSum = num.substring(0, num.length ~/ 2).split('').map(int.parse).reduce((a, b) => a + b);
      int rightSum = num.substring(num.length ~/ 2 + 1).split('').map(int.parse).reduce((a, b) => a + b);
      return leftSum == rightSum ? "Balanced" : "Not Balanced";
    } else {
      int leftSum = num.substring(0, num.length ~/ 2 - 1).split('').map(int.parse).reduce((a, b) => a + b);
      int rightSum = num.substring(num.length ~/ 2 + 1).split('').map(int.parse).reduce((a, b) => a + b);
      return leftSum == rightSum ? "Balanced" : "Not Balanced";
    }
  }
}
