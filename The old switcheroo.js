function vowel2index(str) {
   return str.split("").map((e,i) => /[aiueo]/.test(e.toLowerCase()) ? String(i+1) : e).join("")
}

