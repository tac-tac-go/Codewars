const check_palindrome = (s) => s!==[...s].reverse().join("")
const palindromeChainLength = (n) => {
  let count = 0
  while(check_palindrome(String(n))){
    n = n+parseInt([...String(n)].reverse().join(""))
    count++;
  }
  return count;
};
