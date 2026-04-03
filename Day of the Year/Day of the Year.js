function toDayOfYear(arr) {
  const [day,month,year] = arr
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  const daysInMonth = [31, isLeapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let dayOfYear = day;
  for (let i = 0; i < month - 1; i++) {
      dayOfYear += daysInMonth[i];
  }
  return dayOfYear;
}
