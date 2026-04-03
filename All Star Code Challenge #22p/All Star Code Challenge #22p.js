function toTime(seconds) {
  let hour = Math.floor(seconds/(3600))
  let minute = Math.floor((seconds-hour*3600)/60)
  return `${hour} hour(s) and ${minute} minute(s)`
}
