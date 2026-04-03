String duckDuckGoose(dynamic players, int goose){
  return players[(goose-1)%players.length].name;
}
