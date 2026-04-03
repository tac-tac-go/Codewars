bool tidyNumber(n) {
   List<String> result = n.toString().split('');
   result.sort();
   return result.join() == n.toString();
}
