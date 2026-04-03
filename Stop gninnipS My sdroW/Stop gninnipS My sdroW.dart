String spinWords(String str) {
  return str.split(" ").map((v) => v.length>=5 ? v.split("").reversed.join("") : v).join(" ");
}
