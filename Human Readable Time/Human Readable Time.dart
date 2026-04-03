String humanReadable(int seconds) {
  int hour = (seconds ~/ 3600);
  seconds = seconds % 3600;
  int minutes = (seconds ~/ 60);
  seconds = seconds % 60;
  return hour.toString().padLeft(2, '0') + ":" + minutes.toString().padLeft(2, '0') + ":" + seconds.toString().padLeft(2, '0');
}
