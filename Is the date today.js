function isToday(date) {
  return date.toISOString().split("T")[0] === (new Date()).toISOString().split("T")[0]
}
