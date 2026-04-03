bool isPalindrome(String x) {
  return x.toLowerCase()==x.split("").reversed.join("").toLowerCase();
}
