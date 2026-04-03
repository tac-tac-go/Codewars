const howManyYears = function(date1, date2){
  const v1 = parseInt(date1.split("/")[0])
  const v2 = parseInt(date2.split("/")[0])
  return Math.abs(v2-v1)
}
