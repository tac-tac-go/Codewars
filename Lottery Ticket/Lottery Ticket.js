function bingo(ticket, win){
  let miniWins = 0;
  for (const [str, num] of ticket) {
      for (const char of str) {
          if (char.charCodeAt(0) === num) {
              miniWins++;
              break; 
          }
      }
  }
  return miniWins >= win ? 'Winner!' : 'Loser!';
}
