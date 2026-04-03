function countCorrectCharacters(correctWord, guess){
  if(correctWord.length!==guess.length) throw new Error('Throw an error if the two parameters are of different lengths.');
  return [...correctWord].filter((c,i)=>c===guess[i]).length;
}
