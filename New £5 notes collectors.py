const getNewNotes = (salary,bills) => {
  let amount = bills.reduce((a,b) => a+b,0)
  return salary-amount < 0 ? 0 : Math.floor((salary-amount)/5)
}
