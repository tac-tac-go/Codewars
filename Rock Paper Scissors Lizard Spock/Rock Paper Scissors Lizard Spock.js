function rpsls(p1, p2) {
    if (p1 === p2) return 'Draw!'
    let rules = {
        'paper': ['rock', 'spock'],
        'rock': ['lizard', 'scissors'],
        'lizard': ['spock', 'paper'],
        'spock': ['scissors', 'rock'],
        'scissors': ['lizard', 'paper']       
    }
    if (rules[p1].includes(p2))
        return 'Player 1 Won!'
    else
        return 'Player 2 Won!'
}
