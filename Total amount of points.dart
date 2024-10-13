int points(List<String> games) {
  int points = 0;
  for (var game in games) {
    var scores = game.split(":").map(int.parse).toList();
    int x = scores[0];
    int y = scores[1];
    points += (x > y) ? 3 : (x < y) ? 0 : 1;
  }
  return points;
}

