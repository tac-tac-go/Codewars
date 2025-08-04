function nextBirthdayOfTheWeek(date) {
  const targetDay = date.getDay()
  const month = date.getMonth()
  const day = date.getDate()
  const startYear = date.getFullYear()
  for (let i = 1; ; i++) {
    const candidate = new Date(startYear + i, month, day)
    if (candidate.getMonth() !== month) continue
    if (candidate.getDay() === targetDay) return i
  }
}
