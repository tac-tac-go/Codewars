function scoreboard(participants){
  const scores = participants.map(participant => {
  const score = 
    participant.chickenwings * 5 + 
    participant.hamburgers * 3 + 
      participant.hotdogs * 2;
    return { name: participant.name, score: score };
  });

  scores.sort((a, b) => b.score - a.score || a.name.localeCompare(b.name))

  return scores;
}
