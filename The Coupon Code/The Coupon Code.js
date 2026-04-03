function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  const d1 = new Date(currentDate);
  const d2 = new Date(expirationDate);
  return d1<=d2 && (enteredCode===correctCode)
}
