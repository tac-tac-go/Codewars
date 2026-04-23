const vowelMap = {
  'a': 'a', 'A': 'a', 'あ': 'a', 'ア': 'a',
  'e': 'e', 'E': 'e', 'え': 'e', 'エ': 'e',
  'i': 'i', 'I': 'i', 'い': 'i', 'イ': 'i',
  'u': 'u', 'U': 'u', 'う': 'u', 'ウ': 'u',
  'o': 'o', 'O': 'o', 'お': 'o', 'オ': 'o'
};

const convertMap = {
  hiragana: { 'a': 'あ', 'e': 'え', 'i': 'い', 'u': 'う', 'o': 'お' },
  katakana: { 'a': 'ア', 'e': 'エ', 'i': 'イ', 'u': 'ウ', 'o': 'オ' },
  romaji:   { 'a': 'a', 'e': 'e', 'i': 'i', 'u': 'u', 'o': 'o' }
};

function vowels(input, output){
  return [...input].map(v => {
  if (output === "romaji" && /[a-zA-Z]/.test(v)) {
    return v;
  }
  const key = vowelMap[v];
  return convertMap[output][key];
}).join("");
}
