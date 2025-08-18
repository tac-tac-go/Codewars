const calculateScore = (cards, wager) => cards.length || wager  ? cards.reduce( (score,card) => score + card, -20 ) * (wager+1) : 0
