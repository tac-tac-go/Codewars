const to24hourtime =  (hour, minute, period) => {
  hour = period === 'pm' ? (hour%12)+12 : (hour%12)
  return String(hour).padStart(2,'0')+String(minute).padStart(2,'0')
}
