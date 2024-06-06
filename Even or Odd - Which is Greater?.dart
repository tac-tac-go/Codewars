String evenOrOdd(String number) {
  final even = number.split("").map((v) => int.parse(v)).where((v) => v%2==0).fold(0,(a,b) => a+b);
  final odd = number.split("").map((v) => int.parse(v)).where((v) => v%2==1).fold(0,(a,b) => a+b);
   if (odd == even) {
    return 'Even and Odd are the same';
  } else if (odd > even) {
    return 'Odd is greater than Even';
  } else {
    return 'Even is greater than Odd';
  }
}
