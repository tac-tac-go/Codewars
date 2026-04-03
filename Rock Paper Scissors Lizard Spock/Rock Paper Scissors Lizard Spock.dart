String rpsls(String p1, String p2) {
  if (p1 == 'scissors' && p2 == 'paper') return 'Player 1 Won!';
  else if (p1 == 'paper' && p2 == 'rock') return 'Player 1 Won!';
  else if (p1 == 'rock' && p2 == 'lizard') return 'Player 1 Won!';
  else if (p1 == 'lizard' && p2 == 'spock') return 'Player 1 Won!';
  else if (p1 == 'spock' && p2 == 'scissors') return 'Player 1 Won!';
  else if (p1 == 'scissors' && p2 == 'lizard') return 'Player 1 Won!';
  else if (p1 == 'lizard' && p2 == 'paper') return 'Player 1 Won!';
  else if (p1 == 'paper' && p2 == 'spock') return 'Player 1 Won!';
  else if (p1 == 'spock' && p2 == 'rock') return 'Player 1 Won!';
  else if (p1 == 'rock' && p2 == 'scissors') return 'Player 1 Won!';
  else if (p2 == 'scissors' && p1 == 'paper') return 'Player 2 Won!';
  else if (p2 == 'paper' && p1 == 'rock') return 'Player 2 Won!';
  else if (p2 == 'rock' && p1 == 'lizard') return 'Player 2 Won!';
  else if (p2 == 'lizard' && p1 == 'spock') return 'Player 2 Won!';
  else if (p2 == 'spock' && p1 == 'scissors') return 'Player 2 Won!';
  else if (p2 == 'scissors' && p1 == 'lizard') return 'Player 2 Won!';
  else if (p2 == 'lizard' && p1 == 'paper') return 'Player 2 Won!';
  else if (p2 == 'paper' && p1 == 'spock') return 'Player 2 Won!';
  else if (p2 == 'spock' && p1 == 'rock') return 'Player 2 Won!';
  else if (p2 == 'rock' && p1 == 'scissors') return 'Player 2 Won!';
  else return 'Draw!';
}
