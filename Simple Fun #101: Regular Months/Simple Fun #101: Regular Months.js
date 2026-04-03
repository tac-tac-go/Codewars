function regularMonths(currMonth) {
  let [mStr, yStr] = currMonth.split("-");
  let month = Number(mStr) - 1; 
  let year = Number(yStr);
  month += 1;
  if (month === 12) { month = 0; year += 1; }

  while (true) {
    if (new Date(year, month, 1).getDay() === 1) {
      const mm = String(month + 1).padStart(2, "0"); 
      return `${mm}-${year}`;
    }
    month += 1;
    if (month === 12) { month = 0; year += 1; }
  }
}
