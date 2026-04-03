function nextDayOfWeek(currentDay, availableWeekdays) {
  for (let i = 1; i <= 7; i++) {
    let next = ((currentDay + i - 1) % 7) + 1;
    let bit = 2 ** (next - 1);
    if (bit & availableWeekdays) {
      return next; 
    }
  }
}
