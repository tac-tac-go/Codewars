List isVow(List arr){
  const Map<int, String> vowels = {
    97: 'a',  
    101: 'e', 
    105: 'i', 
    111: 'o', 
    117: 'u', 
  };

  return arr.map((n) => vowels[n] ?? n).toList();
}
